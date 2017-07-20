
/**
 * Module dependencies.
 */

var md = require('marked');

/**
 * Parse the given `str` of markdown.
 *
 * @param {String} str
 * @param {Object} options
 * @return {Object}
 * @api public
 */

module.exports = function(str, options){
  options = options || {};
  var toks = md.lexer(str);
  var conf = {};
  var keys = [];
  var depth = 0;
  var inlist = false;

  toks.forEach(function(tok){
    switch (tok.type) {
      case 'heading':
        while (depth-- >= tok.depth) keys.pop();
        keys.push(normalize(tok.text));
        depth = tok.depth;
        break;
      case 'list_item_start':
        inlist = true;
        break;
      case 'list_item_end':
        inlist = false;
        break;
      case 'text':
        put(conf, keys, tok.text);
        break;
      case 'code':
        put(conf, keys, tok.text, true);
        break;
      case 'table':
        put(conf, keys, null, null, {headers: tok.header, rows: tok.cells});
        break;
    }
  });

  return conf;
};

/**
 * Add `str` to `obj` with the given `keys`
 * which represents the traversal path.
 *
 * @param {Object} obj
 * @param {Array} keys
 * @param {String} str
 * @param {Object} table
 * @api private
 */

function put(obj, keys, str, code, table) {
  var target = obj;
  var last;
  var key;

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    last = target;
    target[key] = target[key] || {};
    target = target[key];
  }

  // code
  if (code) {
    if (!Array.isArray(last[key])) last[key] = [];
    last[key].push(str);
    return;
  }

  // table
  if (table) {
    if (!Array.isArray(last[key])) last[key] = [];
    for (var ri = 0; ri < table.rows.length; ri++) {
      var arrItem = {};
      for (var hi = 0; hi < table.headers.length; hi++) {
        arrItem[normalize(table.headers[hi])] = table.rows[ri][hi];
      }
      last[key].push(arrItem);
    }
    return;
  }

  var i = str.indexOf(':');

  // list
  if (-1 == i) {
    if (!Array.isArray(last[key])) last[key] = [];
    last[key].push(str.trim());
    return;
  }

  // map
  var key = normalize(str.slice(0, i));
  var val = str.slice(i + 1).trim();
  target[key] = val;
}

/**
 * Normalize `str`.
 */

function normalize(str) {
  return str.replace(/\s+/g, ' ').toLowerCase().trim();
}
