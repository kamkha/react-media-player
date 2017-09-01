'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var names = ['requestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen', 'webkitRequestFullscreen'];
  return names.reduce(function (prev, curr) {
    return typeof document !== "undefined" && document.documentElement[curr] ? curr : prev;
  });
}();

module.exports = exports['default'];