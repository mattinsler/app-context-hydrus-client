'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _got = require('got');

var _got2 = _interopRequireDefault(_got);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

                _context.t0.error = _context.t0.response.body.error;
                console.log(_context.t0.error);

                throw _context.t0;

              case 14:
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

      return this.request('get', urlJoin(this.url, pathname), data);
    }
  }, {
    key: 'post',
    value: function post() {
      var pathname = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
      var data = arguments[1];

      return this.request('post', urlJoin(this.url, pathname), data);
    }
  }]);

  return HydrusClient;
}();

exports.default = HydrusClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oeWRydXMtY2xpZW50LmpzIl0sIm5hbWVzIjpbInVybEpvaW4iLCJwYXJ0cyIsIm1hcCIsInAiLCJpZHgiLCJyZXBsYWNlIiwiam9pbiIsIkh5ZHJ1c0NsaWVudCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJvcHRzIiwiaGVhZGVycyIsImpzb24iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJxdWVyeSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwiZXJyb3IiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJwYXRobmFtZSIsInJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxPQUFULEdBQTJCO0FBQUEsb0NBQVBDLEtBQU87QUFBUEEsU0FBTztBQUFBOztBQUN6QixTQUFPQSxNQUFNQyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxHQUFKLEVBQVk7QUFDM0IsUUFBSUEsUUFBUSxDQUFaLEVBQWU7QUFDYixhQUFPRCxFQUFFRSxPQUFGLENBQVUsTUFBVixFQUFrQixFQUFsQixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT0YsRUFBRUUsT0FBRixDQUFVLE1BQVYsRUFBa0IsRUFBbEIsQ0FBUDtBQUNEO0FBQ0YsR0FOTSxFQU1KQyxJQU5JLENBTUMsR0FORCxDQUFQO0FBT0Q7O0lBRUtDLFk7QUFDSix3QkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNEOzs7Ozs0RUFFYUMsTSxFQUFRRCxHLEVBQUtFLEk7Ozs7OztBQUNuQkMsb0IsR0FBTztBQUNYRixnQ0FEVztBQUVYRywyQkFBUztBQUNQLGtDQUFjO0FBRFAsbUJBRkU7QUFLWEMsd0JBQU07QUFMSyxpQjs7O0FBUWIsb0JBQUlILFFBQVFJLE9BQU9DLElBQVAsQ0FBWUwsSUFBWixFQUFrQk0sTUFBbEIsR0FBMkIsQ0FBdkMsRUFBMEM7QUFDeEMsc0JBQUlQLE9BQU9RLFdBQVAsT0FBeUIsS0FBN0IsRUFBb0M7QUFDbENOLHlCQUFLTyxLQUFMLEdBQWFSLElBQWI7QUFDRCxtQkFGRCxNQUVPO0FBQ0xDLHlCQUFLUSxJQUFMLEdBQVlDLEtBQUtDLFNBQUwsQ0FBZVgsSUFBZixDQUFaO0FBQ0FDLHlCQUFLQyxPQUFMLENBQWEsY0FBYixJQUErQixrQkFBL0I7QUFDRDtBQUNGOzs7O3VCQUdtQixtQkFBSUosR0FBSixFQUFTRyxJQUFULEM7OztBQUFaVyxtQjtpREFDQ0EsSUFBSUgsSTs7Ozs7O0FBRVgsNEJBQUlJLEtBQUosR0FBWSxZQUFJQyxRQUFKLENBQWFMLElBQWIsQ0FBa0JJLEtBQTlCO0FBQ0FFLHdCQUFRQyxHQUFSLENBQVksWUFBSUgsS0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1zQjtBQUFBLFVBQXRCSSxRQUFzQix5REFBWCxHQUFXO0FBQUEsVUFBTmpCLElBQU07O0FBQ3hCLGFBQU8sS0FBS2tCLE9BQUwsQ0FBYSxLQUFiLEVBQW9CNUIsUUFBUSxLQUFLUSxHQUFiLEVBQWtCbUIsUUFBbEIsQ0FBcEIsRUFBaURqQixJQUFqRCxDQUFQO0FBQ0Q7OzsyQkFFMEI7QUFBQSxVQUF0QmlCLFFBQXNCLHlEQUFYLEdBQVc7QUFBQSxVQUFOakIsSUFBTTs7QUFDekIsYUFBTyxLQUFLa0IsT0FBTCxDQUFhLE1BQWIsRUFBcUI1QixRQUFRLEtBQUtRLEdBQWIsRUFBa0JtQixRQUFsQixDQUFyQixFQUFrRGpCLElBQWxELENBQVA7QUFDRDs7Ozs7O2tCQUdZSCxZIiwiZmlsZSI6Imh5ZHJ1cy1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ290IGZyb20gJ2dvdCc7XG5cbmZ1bmN0aW9uIHVybEpvaW4oLi4ucGFydHMpIHtcbiAgcmV0dXJuIHBhcnRzLm1hcCgocCwgaWR4KSA9PiB7XG4gICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHAucmVwbGFjZSgvXFwvKyQvLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwLnJlcGxhY2UoL15cXC8rLywgJycpO1xuICAgIH1cbiAgfSkuam9pbignLycpO1xufVxuXG5jbGFzcyBIeWRydXNDbGllbnQge1xuICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIGFzeW5jIHJlcXVlc3QobWV0aG9kLCB1cmwsIGRhdGEpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgbWV0aG9kLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAndXNlci1hZ2VudCc6ICdoeWRydXMvMC4wLjEnXG4gICAgICB9LFxuICAgICAganNvbjogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAobWV0aG9kLnRvTG93ZXJDYXNlKCkgPT09ICdnZXQnKSB7XG4gICAgICAgIG9wdHMucXVlcnkgPSBkYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0cy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIG9wdHMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdvdCh1cmwsIG9wdHMpO1xuICAgICAgcmV0dXJuIHJlcy5ib2R5O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZXJyLmVycm9yID0gZXJyLnJlc3BvbnNlLmJvZHkuZXJyb3I7XG4gICAgICBjb25zb2xlLmxvZyhlcnIuZXJyb3IpO1xuXG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgZ2V0KHBhdGhuYW1lID0gJy8nLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnZ2V0JywgdXJsSm9pbih0aGlzLnVybCwgcGF0aG5hbWUpLCBkYXRhKTtcbiAgfVxuXG4gIHBvc3QocGF0aG5hbWUgPSAnLycsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdwb3N0JywgdXJsSm9pbih0aGlzLnVybCwgcGF0aG5hbWUpLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIeWRydXNDbGllbnQ7XG4iXX0=