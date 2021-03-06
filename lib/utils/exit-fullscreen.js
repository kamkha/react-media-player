'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var names = ['exitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen', 'webkitExitFullscreen'];
  return names.reduce(function (prev, curr) {
    return typeof document !== "undefined" && document[curr] ? curr : prev;
  });
}();

module.exports = exports['default'];