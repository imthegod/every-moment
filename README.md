#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Declarative setinterval using moment durations


## Install

```sh
$ npm install --save every-moment
```


## Usage

```js
var every = require('every-moment');

every(5, 'seconds', function() {
    console.log('got called');
});
```


## License

MIT © [Ray Gerrard]()


[npm-url]: https://npmjs.org/package/every-moment
[npm-image]: https://badge.fury.io/js/every-moment.svg
[travis-url]: https://travis-ci.org/raygerrard/every-moment
[travis-image]: https://travis-ci.org/raygerrard/every-moment.svg?branch=master
[daviddm-url]: https://david-dm.org/raygerrard/every-moment.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/raygerrard/every-moment
