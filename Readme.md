# mdconf

  Markdown driven configuration!

  Using the fantastic markdown parser [marked](https://github.com/chjj/marked).

## Installation

```
$ npm install mdconf
```

## ports

- [Python port](https://github.com/hit9/mdconf.py)

## API

```js
var parse = require('mdconf');
parse('string of markdown');
// => Object
```

## Example

Markdown headings act as keys, list items with `:` act as maps,
otherwise regular lists behave as.. lists.

```markdown
# Defaults

  Since this is markdown you can still have regular text
  to explain what the hell is going on.

## Upload

  - max: 200mb
  - dir: /tmp

### Thumbnail sizes

  - 50x50
  - 300x300
  - 600x600
  - 900x900

## S3

  - api key: 111111
  - secret: 222222

### Buckets

  - avatars: myapp-avatars
  - assets: myapp-assets
  - files: myapp-files

# Production

## Upload

  - max: 1gb
  - dir: /data/uploads
```

output json:

```json
{
  "defaults": {
    "upload": {
      "max": "200mb",
      "dir": "/tmp",
      "thumbnail sizes": [
        "50x50",
        "300x300",
        "600x600",
        "900x900"
      ]
    },
    "s3": {
      "api key": "111111",
      "secret": "222222",
      "buckets": {
        "avatars": "myapp-avatars",
        "assets": "myapp-assets",
        "files": "myapp-files"
      }
    }
  },
  "production": {
    "upload": {
      "max": "1gb",
      "dir": "/data/uploads"
    }
  }
}
```

  With markdown blocks you could easily use this as a tool for
  static site generation:

```md

# Scripts

  My site does almost nothing:

    document.write('<h1>mdconf</h1>')
    document.write('<p>Markdown configuration is pretty cool</p>')

# Styles

  Main structural styling:

    body {
      padding: 50px;
      font: 14px Helvetica;
    }

  Some other stuff:

    button {
      padding: 15px;
    }
```

 yields:

```js
{
  "scripts": [
    "document.write('<h1>mdconf</h1>')\ndocument.write('<p>Markdown configuration is pretty cool</p>')"
  ],
  "styles": [
    "body {\n  padding: 50px;\n  font: 14px Helvetica;\n}",
    "button {\n  padding: 15px;\n}"
  ]
}
```

## License

(The MIT License)

Copyright (c) 2013 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
