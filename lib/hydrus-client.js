'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _got = require('got');

var _got2 = _interopRequireDefault(_got);

var _urlJoin = require('./url-join');

var _urlJoin2 = _interopRequireDefault(_urlJoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HydrusClient = function () {
  function HydrusClient(url) {
    _classCallCheck(this, HydrusClient);

    this.url = url;
  }

  _createClass(HydrusClient, [{
    key: 'request',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(method, url, data) {
        var opts, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                opts = {
                  method: method,
                  headers: {
                    'user-agent': 'hydrus/0.0.1'
                  },
                  json: true
                };


                if (data && Object.keys(data).length > 0) {
                  if (method.toLowerCase() === 'get') {
                    opts.query = data;
                  } else {
                    opts.body = JSON.stringify(data);
                    opts.headers['content-type'] = 'application/json';
                  }
                }

                _context.prev = 2;
                _context.next = 5;
                return (0, _got2.default)(url, opts);

              case 5:
                res = _context.sent;
                return _context.abrupt('return', res.body);

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](2);

                if (_context.t0.response && _context.t0.response.body && Array.isArray(_context.t0.response.body.error)) {
                  _context.t0.error = _context.t0.response.body.error;
                  _context.t0.message = '[' + _context.t0.statusCode + '] ' + _context.t0.statusMessage + ': ' + _context.t0.error.join('. ') + '.';
                }

                throw _context.t0;

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function request(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: 'get',
    value: function get() {
      var pathname = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
      var data = arguments[1];

      return this.request('get', (0, _urlJoin2.default)(this.url, pathname), data);
    }
  }, {
    key: 'post',
    value: function post() {
      var pathname = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
      var data = arguments[1];

      return this.request('post', (0, _urlJoin2.default)(this.url, pathname), data);
    }
  }]);

  return HydrusClient;
}();

exports.default = HydrusClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oeWRydXMtY2xpZW50LmpzIl0sIm5hbWVzIjpbIkh5ZHJ1c0NsaWVudCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJvcHRzIiwiaGVhZGVycyIsImpzb24iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJxdWVyeSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwicmVzcG9uc2UiLCJBcnJheSIsImlzQXJyYXkiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsImpvaW4iLCJwYXRobmFtZSIsInJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxZO0FBQ0osd0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRDs7Ozs7NEVBRWFDLE0sRUFBUUQsRyxFQUFLRSxJOzs7Ozs7QUFDbkJDLG9CLEdBQU87QUFDWEYsZ0NBRFc7QUFFWEcsMkJBQVM7QUFDUCxrQ0FBYztBQURQLG1CQUZFO0FBS1hDLHdCQUFNO0FBTEssaUI7OztBQVFiLG9CQUFJSCxRQUFRSSxPQUFPQyxJQUFQLENBQVlMLElBQVosRUFBa0JNLE1BQWxCLEdBQTJCLENBQXZDLEVBQTBDO0FBQ3hDLHNCQUFJUCxPQUFPUSxXQUFQLE9BQXlCLEtBQTdCLEVBQW9DO0FBQ2xDTix5QkFBS08sS0FBTCxHQUFhUixJQUFiO0FBQ0QsbUJBRkQsTUFFTztBQUNMQyx5QkFBS1EsSUFBTCxHQUFZQyxLQUFLQyxTQUFMLENBQWVYLElBQWYsQ0FBWjtBQUNBQyx5QkFBS0MsT0FBTCxDQUFhLGNBQWIsSUFBK0Isa0JBQS9CO0FBQ0Q7QUFDRjs7Ozt1QkFHbUIsbUJBQUlKLEdBQUosRUFBU0csSUFBVCxDOzs7QUFBWlcsbUI7aURBQ0NBLElBQUlILEk7Ozs7OztBQUVYLG9CQUFJLFlBQUlJLFFBQUosSUFBZ0IsWUFBSUEsUUFBSixDQUFhSixJQUE3QixJQUFxQ0ssTUFBTUMsT0FBTixDQUFjLFlBQUlGLFFBQUosQ0FBYUosSUFBYixDQUFrQk8sS0FBaEMsQ0FBekMsRUFBaUY7QUFDL0UsOEJBQUlBLEtBQUosR0FBWSxZQUFJSCxRQUFKLENBQWFKLElBQWIsQ0FBa0JPLEtBQTlCO0FBQ0EsOEJBQUlDLE9BQUosR0FBYyxNQUFJLFlBQUlDLFVBQVIsVUFBdUIsWUFBSUMsYUFBM0IsVUFBK0MsWUFBSUgsS0FBSixDQUFVSSxJQUFWLENBQWUsSUFBZixDQUEvQyxHQUFzRSxHQUFwRjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNcUI7QUFBQSxVQUF0QkMsUUFBc0IseURBQVgsR0FBVztBQUFBLFVBQU5yQixJQUFNOztBQUN4QixhQUFPLEtBQUtzQixPQUFMLENBQWEsS0FBYixFQUFvQix1QkFBUSxLQUFLeEIsR0FBYixFQUFrQnVCLFFBQWxCLENBQXBCLEVBQWlEckIsSUFBakQsQ0FBUDtBQUNEOzs7MkJBRTBCO0FBQUEsVUFBdEJxQixRQUFzQix5REFBWCxHQUFXO0FBQUEsVUFBTnJCLElBQU07O0FBQ3pCLGFBQU8sS0FBS3NCLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLHVCQUFRLEtBQUt4QixHQUFiLEVBQWtCdUIsUUFBbEIsQ0FBckIsRUFBa0RyQixJQUFsRCxDQUFQO0FBQ0Q7Ozs7OztrQkFHWUgsWSIsImZpbGUiOiJoeWRydXMtY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdvdCBmcm9tICdnb3QnO1xuaW1wb3J0IHVybEpvaW4gZnJvbSAnLi91cmwtam9pbic7XG5cbmNsYXNzIEh5ZHJ1c0NsaWVudCB7XG4gIGNvbnN0cnVjdG9yKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgYXN5bmMgcmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBtZXRob2QsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICd1c2VyLWFnZW50JzogJ2h5ZHJ1cy8wLjAuMSdcbiAgICAgIH0sXG4gICAgICBqc29uOiB0cnVlXG4gICAgfTtcblxuICAgIGlmIChkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChtZXRob2QudG9Mb3dlckNhc2UoKSA9PT0gJ2dldCcpIHtcbiAgICAgICAgb3B0cy5xdWVyeSA9IGRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRzLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgb3B0cy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ290KHVybCwgb3B0cyk7XG4gICAgICByZXR1cm4gcmVzLmJvZHk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLnJlc3BvbnNlICYmIGVyci5yZXNwb25zZS5ib2R5ICYmIEFycmF5LmlzQXJyYXkoZXJyLnJlc3BvbnNlLmJvZHkuZXJyb3IpKSB7XG4gICAgICAgIGVyci5lcnJvciA9IGVyci5yZXNwb25zZS5ib2R5LmVycm9yO1xuICAgICAgICBlcnIubWVzc2FnZSA9IGBbJHtlcnIuc3RhdHVzQ29kZX1dICR7ZXJyLnN0YXR1c01lc3NhZ2V9OiBgICsgZXJyLmVycm9yLmpvaW4oJy4gJykgKyAnLic7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICBnZXQocGF0aG5hbWUgPSAnLycsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdnZXQnLCB1cmxKb2luKHRoaXMudXJsLCBwYXRobmFtZSksIGRhdGEpO1xuICB9XG5cbiAgcG9zdChwYXRobmFtZSA9ICcvJywgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ3Bvc3QnLCB1cmxKb2luKHRoaXMudXJsLCBwYXRobmFtZSksIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh5ZHJ1c0NsaWVudDtcbiJdfQ==