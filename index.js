/**
 * Module Dependencies
 */

var ap = require('autoprefixer-core');
var cc = require('to-camel-case');
var css = require('css');

/**
 * Export `ctoj`
 */

module.exports = function ctoj(str) {
  var rules = css.parse(ap.process(str).css).stylesheet;
  var obj = {};

  if (!rules.rules) return obj;

  rules.rules = rules.rules.map(function(rule) {
    if ('rule' != rule.type) return rule;
    rule.selectors.forEach(function(selector) {
      obj[selector] = attrs = {};
      rule.declarations.forEach(function(dec) {
        attrs[cc(dec.property.replace(/^-/, ''))] = dec.value;
      });
    })
  });

  return obj;
}
