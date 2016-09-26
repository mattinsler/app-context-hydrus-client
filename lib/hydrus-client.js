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

                if (!(_context.t0.code === 'ENOTFOUND')) {
                  _context.next = 13;
                  break;
                }

                throw _context.t0;

              case 13:
                _context.t0.error = _context.t0.response.body.error;
                _context.t0.message = _context.t0.statusMessage + '[' + _context.t0.statusCode + ']: ' + _context.t0.error.join('.') + '.';

                throw _context.t0;

              case 16:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oeWRydXMtY2xpZW50LmpzIl0sIm5hbWVzIjpbIkh5ZHJ1c0NsaWVudCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJvcHRzIiwiaGVhZGVycyIsImpzb24iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJxdWVyeSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwiY29kZSIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwic3RhdHVzTWVzc2FnZSIsInN0YXR1c0NvZGUiLCJqb2luIiwicGF0aG5hbWUiLCJyZXF1ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsWTtBQUNKLHdCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs7OzRFQUVhQyxNLEVBQVFELEcsRUFBS0UsSTs7Ozs7O0FBQ25CQyxvQixHQUFPO0FBQ1hGLGdDQURXO0FBRVhHLDJCQUFTO0FBQ1Asa0NBQWM7QUFEUCxtQkFGRTtBQUtYQyx3QkFBTTtBQUxLLGlCOzs7QUFRYixvQkFBSUgsUUFBUUksT0FBT0MsSUFBUCxDQUFZTCxJQUFaLEVBQWtCTSxNQUFsQixHQUEyQixDQUF2QyxFQUEwQztBQUN4QyxzQkFBSVAsT0FBT1EsV0FBUCxPQUF5QixLQUE3QixFQUFvQztBQUNsQ04seUJBQUtPLEtBQUwsR0FBYVIsSUFBYjtBQUNELG1CQUZELE1BRU87QUFDTEMseUJBQUtRLElBQUwsR0FBWUMsS0FBS0MsU0FBTCxDQUFlWCxJQUFmLENBQVo7QUFDQUMseUJBQUtDLE9BQUwsQ0FBYSxjQUFiLElBQStCLGtCQUEvQjtBQUNEO0FBQ0Y7Ozs7dUJBR21CLG1CQUFJSixHQUFKLEVBQVNHLElBQVQsQzs7O0FBQVpXLG1CO2lEQUNDQSxJQUFJSCxJOzs7Ozs7c0JBRVAsWUFBSUksSUFBSixLQUFhLFc7Ozs7Ozs7O0FBR2pCLDRCQUFJQyxLQUFKLEdBQVksWUFBSUMsUUFBSixDQUFhTixJQUFiLENBQWtCSyxLQUE5QjtBQUNBLDRCQUFJRSxPQUFKLEdBQWlCLFlBQUlDLGFBQVAsU0FBd0IsWUFBSUMsVUFBNUIsV0FBOEMsWUFBSUosS0FBSixDQUFVSyxJQUFWLENBQWUsR0FBZixDQUE5QyxHQUFvRSxHQUFsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXNCO0FBQUEsVUFBdEJDLFFBQXNCLHlEQUFYLEdBQVc7QUFBQSxVQUFOcEIsSUFBTTs7QUFDeEIsYUFBTyxLQUFLcUIsT0FBTCxDQUFhLEtBQWIsRUFBb0IsdUJBQVEsS0FBS3ZCLEdBQWIsRUFBa0JzQixRQUFsQixDQUFwQixFQUFpRHBCLElBQWpELENBQVA7QUFDRDs7OzJCQUUwQjtBQUFBLFVBQXRCb0IsUUFBc0IseURBQVgsR0FBVztBQUFBLFVBQU5wQixJQUFNOztBQUN6QixhQUFPLEtBQUtxQixPQUFMLENBQWEsTUFBYixFQUFxQix1QkFBUSxLQUFLdkIsR0FBYixFQUFrQnNCLFFBQWxCLENBQXJCLEVBQWtEcEIsSUFBbEQsQ0FBUDtBQUNEOzs7Ozs7a0JBR1lILFkiLCJmaWxlIjoiaHlkcnVzLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnb3QgZnJvbSAnZ290JztcbmltcG9ydCB1cmxKb2luIGZyb20gJy4vdXJsLWpvaW4nO1xuXG5jbGFzcyBIeWRydXNDbGllbnQge1xuICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIGFzeW5jIHJlcXVlc3QobWV0aG9kLCB1cmwsIGRhdGEpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgbWV0aG9kLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAndXNlci1hZ2VudCc6ICdoeWRydXMvMC4wLjEnXG4gICAgICB9LFxuICAgICAganNvbjogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAobWV0aG9kLnRvTG93ZXJDYXNlKCkgPT09ICdnZXQnKSB7XG4gICAgICAgIG9wdHMucXVlcnkgPSBkYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0cy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIG9wdHMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdvdCh1cmwsIG9wdHMpO1xuICAgICAgcmV0dXJuIHJlcy5ib2R5O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PVEZPVU5EJykge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICBlcnIuZXJyb3IgPSBlcnIucmVzcG9uc2UuYm9keS5lcnJvcjtcbiAgICAgIGVyci5tZXNzYWdlID0gYCR7ZXJyLnN0YXR1c01lc3NhZ2V9WyR7ZXJyLnN0YXR1c0NvZGV9XTogYCArIGVyci5lcnJvci5qb2luKCcuJykgKyAnLic7XG5cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICBnZXQocGF0aG5hbWUgPSAnLycsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdnZXQnLCB1cmxKb2luKHRoaXMudXJsLCBwYXRobmFtZSksIGRhdGEpO1xuICB9XG5cbiAgcG9zdChwYXRobmFtZSA9ICcvJywgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ3Bvc3QnLCB1cmxKb2luKHRoaXMudXJsLCBwYXRobmFtZSksIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh5ZHJ1c0NsaWVudDtcbiJdfQ==