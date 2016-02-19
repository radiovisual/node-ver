# node-ver [![Build Status](https://travis-ci.org/radiovisual/node-ver.svg?branch=master)](https://travis-ci.org/radiovisual/node-ver)

> Get your environment's active version of node.


## Install

```
$ npm install --save node-ver
```

Get the full version as a `string`, and the major, minor, patch as a `number`. 

## Usage

```js
const version = require('node-ver');

version().full;
//=> '4.2.6'

version().major;
//=> 4

version().minor;
//=> 2

version().patch;
//=> 6
```


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
