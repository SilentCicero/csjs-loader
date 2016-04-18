var requireFromString = require('require-from-string');
var getCss = require('csjs').getCss;

module.exports = function(source) {
  return getCss(requireFromString(source));
}
