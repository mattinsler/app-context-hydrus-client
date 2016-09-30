'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getOperations = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(registryUrl, serviceName) {
    var url, _ref2, operations, client;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = (0, _urlJoin2.default)(registryUrl, 'services', serviceName, 'operations');
            _context.next = 3;
            return (0, _got2.default)(url, { json: true });

          case 3:
            _ref2 = _context.sent;
            operations = _ref2.body;
            client = new _hydrusClient2.default('http://' + serviceName);
            return _context.abrupt('return', operations.map(function (_ref3) {
              var service = _ref3.service;
              var name = _ref3.name;
              return {
                name: name,
                service: service,
                client: client,
                execute: function execute(data) {
                  return client.post(service + '.' + name, data);
                }
              };
            }));

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getOperations(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _got = require('got');

var _got2 = _interopRequireDefault(_got);

var _urlJoin = require('./url-join');

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _hydrusClient = require('./hydrus-client');

var _hydrusClient2 = _interopRequireDefault(_hydrusClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function appContextHydrusClient(registryUrl) {
  var _this = this;

  var services = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  return function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(context) {
      var service;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              service = {};
              _context3.next = 3;
              return Promise.all(services.map(function () {
                var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(serviceName) {
                  var operations, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, op;

                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          service[serviceName] = {};
                          _context2.next = 3;
                          return getOperations(registryUrl, serviceName);

                        case 3:
                          operations = _context2.sent;
                          _iteratorNormalCompletion = true;
                          _didIteratorError = false;
                          _iteratorError = undefined;
                          _context2.prev = 7;

                          for (_iterator = operations[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            op = _step.value;

                            service[serviceName][op.name] = op.execute;
                          }
                          _context2.next = 15;
                          break;

                        case 11:
                          _context2.prev = 11;
                          _context2.t0 = _context2['catch'](7);
                          _didIteratorError = true;
                          _iteratorError = _context2.t0;

                        case 15:
                          _context2.prev = 15;
                          _context2.prev = 16;

                          if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                          }

                        case 18:
                          _context2.prev = 18;

                          if (!_didIteratorError) {
                            _context2.next = 21;
                            break;
                          }

                          throw _iteratorError;

                        case 21:
                          return _context2.finish(18);

                        case 22:
                          return _context2.finish(15);

                        case 23:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this, [[7, 11, 15, 23], [16,, 18, 22]]);
                }));

                return function (_x5) {
                  return _ref5.apply(this, arguments);
                };
              }()));

            case 3:

              context.service = service;

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
}

exports.default = appContextHydrusClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAtY29udGV4dC1oeWRydXMtY2xpZW50LmpzIl0sIm5hbWVzIjpbInJlZ2lzdHJ5VXJsIiwic2VydmljZU5hbWUiLCJ1cmwiLCJqc29uIiwib3BlcmF0aW9ucyIsImJvZHkiLCJjbGllbnQiLCJtYXAiLCJzZXJ2aWNlIiwibmFtZSIsImV4ZWN1dGUiLCJkYXRhIiwicG9zdCIsImdldE9wZXJhdGlvbnMiLCJhcHBDb250ZXh0SHlkcnVzQ2xpZW50Iiwic2VydmljZXMiLCJjb250ZXh0IiwiUHJvbWlzZSIsImFsbCIsIm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3VEQUlBLGlCQUE2QkEsV0FBN0IsRUFBMENDLFdBQTFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsZUFEUixHQUNjLHVCQUFRRixXQUFSLEVBQXFCLFVBQXJCLEVBQWlDQyxXQUFqQyxFQUE4QyxZQUE5QyxDQURkO0FBQUE7QUFBQSxtQkFFcUMsbUJBQUlDLEdBQUosRUFBUyxFQUFFQyxNQUFNLElBQVIsRUFBVCxDQUZyQzs7QUFBQTtBQUFBO0FBRWdCQyxzQkFGaEIsU0FFVUMsSUFGVjtBQUdRQyxrQkFIUixHQUdpQix1Q0FBMkJMLFdBQTNCLENBSGpCO0FBQUEsNkNBS1NHLFdBQVdHLEdBQVgsQ0FBZTtBQUFBLGtCQUFHQyxPQUFILFNBQUdBLE9BQUg7QUFBQSxrQkFBWUMsSUFBWixTQUFZQSxJQUFaO0FBQUEscUJBQXdCO0FBQzVDQSwwQkFENEM7QUFFNUNELGdDQUY0QztBQUc1Q0YsOEJBSDRDO0FBSTVDSSx5QkFBUyxpQkFBQ0MsSUFBRDtBQUFBLHlCQUFVTCxPQUFPTSxJQUFQLENBQWVKLE9BQWYsU0FBMEJDLElBQTFCLEVBQWtDRSxJQUFsQyxDQUFWO0FBQUE7QUFKbUMsZUFBeEI7QUFBQSxhQUFmLENBTFQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWVFLGE7Ozs7O0FBSmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQWVBLFNBQVNDLHNCQUFULENBQWdDZCxXQUFoQyxFQUE0RDtBQUFBOztBQUFBLE1BQWZlLFFBQWUseURBQUosRUFBSTs7QUFDMUQ7QUFBQSwwREFBTyxrQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ1IscUJBREQsR0FDVyxFQURYO0FBQUE7QUFBQSxxQkFHQ1MsUUFBUUMsR0FBUixDQUNKSCxTQUFTUixHQUFUO0FBQUEsc0VBQWEsa0JBQU9OLFdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYTyxrQ0FBUVAsV0FBUixJQUF1QixFQUF2QjtBQURXO0FBQUEsaUNBRWNZLGNBQWNiLFdBQWQsRUFBMkJDLFdBQTNCLENBRmQ7O0FBQUE7QUFFTEcsb0NBRks7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHWCwyQ0FBZUEsVUFBZix1SEFBMkI7QUFBbEJlLDhCQUFrQjs7QUFDekJYLG9DQUFRUCxXQUFSLEVBQXFCa0IsR0FBR1YsSUFBeEIsSUFBZ0NVLEdBQUdULE9BQW5DO0FBQ0Q7QUFMVTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBYjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESSxDQUhEOztBQUFBOztBQWFMTSxzQkFBUVIsT0FBUixHQUFrQkEsT0FBbEI7O0FBYks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVEOztrQkFFY00sc0IiLCJmaWxlIjoiYXBwLWNvbnRleHQtaHlkcnVzLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnb3QgZnJvbSAnZ290JztcbmltcG9ydCB1cmxKb2luIGZyb20gJy4vdXJsLWpvaW4nO1xuaW1wb3J0IEh5ZHJ1c0NsaWVudCBmcm9tICcuL2h5ZHJ1cy1jbGllbnQnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRPcGVyYXRpb25zKHJlZ2lzdHJ5VXJsLCBzZXJ2aWNlTmFtZSkge1xuICBjb25zdCB1cmwgPSB1cmxKb2luKHJlZ2lzdHJ5VXJsLCAnc2VydmljZXMnLCBzZXJ2aWNlTmFtZSwgJ29wZXJhdGlvbnMnKTtcbiAgY29uc3QgeyBib2R5OiBvcGVyYXRpb25zIH0gPSBhd2FpdCBnb3QodXJsLCB7IGpzb246IHRydWUgfSk7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBIeWRydXNDbGllbnQoYGh0dHA6Ly8ke3NlcnZpY2VOYW1lfWApO1xuXG4gIHJldHVybiBvcGVyYXRpb25zLm1hcCgoeyBzZXJ2aWNlLCBuYW1lIH0pID0+ICh7XG4gICAgbmFtZSxcbiAgICBzZXJ2aWNlLFxuICAgIGNsaWVudCxcbiAgICBleGVjdXRlOiAoZGF0YSkgPT4gY2xpZW50LnBvc3QoYCR7c2VydmljZX0uJHtuYW1lfWAsIGRhdGEpXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gYXBwQ29udGV4dEh5ZHJ1c0NsaWVudChyZWdpc3RyeVVybCwgc2VydmljZXMgPSBbXSkge1xuICByZXR1cm4gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0ge307XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHNlcnZpY2VzLm1hcChhc3luYyAoc2VydmljZU5hbWUpID0+IHtcbiAgICAgICAgc2VydmljZVtzZXJ2aWNlTmFtZV0gPSB7fTtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9ucyA9IGF3YWl0IGdldE9wZXJhdGlvbnMocmVnaXN0cnlVcmwsIHNlcnZpY2VOYW1lKTtcbiAgICAgICAgZm9yIChsZXQgb3Agb2Ygb3BlcmF0aW9ucykge1xuICAgICAgICAgIHNlcnZpY2Vbc2VydmljZU5hbWVdW29wLm5hbWVdID0gb3AuZXhlY3V0ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29udGV4dC5zZXJ2aWNlID0gc2VydmljZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwQ29udGV4dEh5ZHJ1c0NsaWVudDtcbiJdfQ==