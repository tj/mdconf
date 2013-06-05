
# mdconf

  Markdown driven configuration!

## Installation

```
$ npm install mdconf
```

## API

```js
var parse = require('mdconf');
parse('string of markdown');
// => Object
```

## Example

Markdown headings act as keys, list items with `:` act as maps,
otherwise regular lists behave as.. lists.

```md
# Defaults

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

## License

(The MIT License)

Copyright (c) 2012 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

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
