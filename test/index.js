/**
 * Module Dependencies
 */

var ctoj = require('../');
var read = require('fs').readFileSync;
var assert = require('assert');

var str = read(__dirname + '/fixtures/modal.css', 'utf8');

var obj = ctoj(str);
// console.log(JSON.stringify(obj, true, 2));
assert.deepEqual(obj, {
  ".modal": {
    "borderStyle": "dotted"
  },
  ".header": {
    "color": "yellow"
  },
  ".body": {
    "background": "green"
  },
  ".footer": {
    "border": "1px solid green",
    "borderRadius": "7px"
  },
  ".another": {
    "border": "1px solid green",
    "borderRadius": "7px"
  },
  ".something.else": {
    "webkitTransform": "translateZ(0)",
    "transform": "translateZ(0)"
  },
  "#tag": {
    "margin": "10px",
    "padding": "20px",
    "color": "green"
  },
  "test-pilot": {
    "color": "blue"
  },
  "span": {
    "textAlign": "center"
  }
})

console.log('tests pass!');
