'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function urlJoin() {
  for (var _len = arguments.length, parts = Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return parts.map(function (p, idx) {
    if (idx === 0) {
      return p.replace(/\/+$/, '');
    } else {
      return p.replace(/^\/+/, '');
    }
  }).join('/');
}

exports.default = urlJoin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91cmwtam9pbi5qcyJdLCJuYW1lcyI6WyJ1cmxKb2luIiwicGFydHMiLCJtYXAiLCJwIiwiaWR4IiwicmVwbGFjZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsT0FBVCxHQUEyQjtBQUFBLG9DQUFQQyxLQUFPO0FBQVBBLFNBQU87QUFBQTs7QUFDekIsU0FBT0EsTUFBTUMsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsR0FBSixFQUFZO0FBQzNCLFFBQUlBLFFBQVEsQ0FBWixFQUFlO0FBQ2IsYUFBT0QsRUFBRUUsT0FBRixDQUFVLE1BQVYsRUFBa0IsRUFBbEIsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9GLEVBQUVFLE9BQUYsQ0FBVSxNQUFWLEVBQWtCLEVBQWxCLENBQVA7QUFDRDtBQUNGLEdBTk0sRUFNSkMsSUFOSSxDQU1DLEdBTkQsQ0FBUDtBQU9EOztrQkFFY04sTyIsImZpbGUiOiJ1cmwtam9pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHVybEpvaW4oLi4ucGFydHMpIHtcbiAgcmV0dXJuIHBhcnRzLm1hcCgocCwgaWR4KSA9PiB7XG4gICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHAucmVwbGFjZSgvXFwvKyQvLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwLnJlcGxhY2UoL15cXC8rLywgJycpO1xuICAgIH1cbiAgfSkuam9pbignLycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1cmxKb2luO1xuIl19