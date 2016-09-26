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
            // const client = new HydrusClient(`http://localhost:3003`);

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
                  var operations;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          service[serviceName] = {};
                          _context2.next = 3;
                          return getOperations(registryUrl, serviceName);

                        case 3:
                          operations = _context2.sent;

                          operations.forEach(function (_ref6) {
                            var name = _ref6.name;
                            var execute = _ref6.execute;

                            service[serviceName][name] = execute;
                          });

                        case 5:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAtY29udGV4dC1oeWRydXMtY2xpZW50LmpzIl0sIm5hbWVzIjpbInJlZ2lzdHJ5VXJsIiwic2VydmljZU5hbWUiLCJ1cmwiLCJqc29uIiwib3BlcmF0aW9ucyIsImJvZHkiLCJjbGllbnQiLCJtYXAiLCJzZXJ2aWNlIiwibmFtZSIsImV4ZWN1dGUiLCJkYXRhIiwicG9zdCIsImdldE9wZXJhdGlvbnMiLCJhcHBDb250ZXh0SHlkcnVzQ2xpZW50Iiwic2VydmljZXMiLCJjb250ZXh0IiwiUHJvbWlzZSIsImFsbCIsImZvckVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7dURBSUEsaUJBQTZCQSxXQUE3QixFQUEwQ0MsV0FBMUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxlQURSLEdBQ2MsdUJBQVFGLFdBQVIsRUFBcUIsVUFBckIsRUFBaUNDLFdBQWpDLEVBQThDLFlBQTlDLENBRGQ7QUFBQTtBQUFBLG1CQUVxQyxtQkFBSUMsR0FBSixFQUFTLEVBQUVDLE1BQU0sSUFBUixFQUFULENBRnJDOztBQUFBO0FBQUE7QUFFZ0JDLHNCQUZoQixTQUVVQyxJQUZWO0FBR1FDLGtCQUhSLEdBR2lCLHVDQUEyQkwsV0FBM0IsQ0FIakI7QUFJRTs7QUFKRiw2Q0FNU0csV0FBV0csR0FBWCxDQUFlO0FBQUEsa0JBQUdDLE9BQUgsU0FBR0EsT0FBSDtBQUFBLGtCQUFZQyxJQUFaLFNBQVlBLElBQVo7QUFBQSxxQkFBd0I7QUFDNUNBLDBCQUQ0QztBQUU1Q0QsZ0NBRjRDO0FBRzVDRiw4QkFINEM7QUFJNUNJLHlCQUFTLGlCQUFDQyxJQUFEO0FBQUEseUJBQVVMLE9BQU9NLElBQVAsQ0FBZUosT0FBZixTQUEwQkMsSUFBMUIsRUFBa0NFLElBQWxDLENBQVY7QUFBQTtBQUptQyxlQUF4QjtBQUFBLGFBQWYsQ0FOVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZUUsYTs7Ozs7QUFKZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBZ0JBLFNBQVNDLHNCQUFULENBQWdDZCxXQUFoQyxFQUE0RDtBQUFBOztBQUFBLE1BQWZlLFFBQWUseURBQUosRUFBSTs7QUFDMUQ7QUFBQSwwREFBTyxrQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ1IscUJBREQsR0FDVyxFQURYO0FBQUE7QUFBQSxxQkFHQ1MsUUFBUUMsR0FBUixDQUNKSCxTQUFTUixHQUFUO0FBQUEsc0VBQWEsa0JBQU9OLFdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1hPLGtDQUFRUCxXQUFSLElBQXVCLEVBQXZCO0FBRFc7QUFBQSxpQ0FFY1ksY0FBY2IsV0FBZCxFQUEyQkMsV0FBM0IsQ0FGZDs7QUFBQTtBQUVMRyxvQ0FGSzs7QUFHWEEscUNBQVdlLE9BQVgsQ0FBbUIsaUJBQXVCO0FBQUEsZ0NBQXBCVixJQUFvQixTQUFwQkEsSUFBb0I7QUFBQSxnQ0FBZEMsT0FBYyxTQUFkQSxPQUFjOztBQUN4Q0Ysb0NBQVFQLFdBQVIsRUFBcUJRLElBQXJCLElBQTZCQyxPQUE3QjtBQUNELDJCQUZEOztBQUhXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURJLENBSEQ7O0FBQUE7O0FBYUxNLHNCQUFRUixPQUFSLEdBQWtCQSxPQUFsQjs7QUFiSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUQ7O2tCQUVjTSxzQiIsImZpbGUiOiJhcHAtY29udGV4dC1oeWRydXMtY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdvdCBmcm9tICdnb3QnO1xuaW1wb3J0IHVybEpvaW4gZnJvbSAnLi91cmwtam9pbic7XG5pbXBvcnQgSHlkcnVzQ2xpZW50IGZyb20gJy4vaHlkcnVzLWNsaWVudCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE9wZXJhdGlvbnMocmVnaXN0cnlVcmwsIHNlcnZpY2VOYW1lKSB7XG4gIGNvbnN0IHVybCA9IHVybEpvaW4ocmVnaXN0cnlVcmwsICdzZXJ2aWNlcycsIHNlcnZpY2VOYW1lLCAnb3BlcmF0aW9ucycpO1xuICBjb25zdCB7IGJvZHk6IG9wZXJhdGlvbnMgfSA9IGF3YWl0IGdvdCh1cmwsIHsganNvbjogdHJ1ZSB9KTtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEh5ZHJ1c0NsaWVudChgaHR0cDovLyR7c2VydmljZU5hbWV9YCk7XG4gIC8vIGNvbnN0IGNsaWVudCA9IG5ldyBIeWRydXNDbGllbnQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwM2ApO1xuXG4gIHJldHVybiBvcGVyYXRpb25zLm1hcCgoeyBzZXJ2aWNlLCBuYW1lIH0pID0+ICh7XG4gICAgbmFtZSxcbiAgICBzZXJ2aWNlLFxuICAgIGNsaWVudCxcbiAgICBleGVjdXRlOiAoZGF0YSkgPT4gY2xpZW50LnBvc3QoYCR7c2VydmljZX0uJHtuYW1lfWAsIGRhdGEpXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gYXBwQ29udGV4dEh5ZHJ1c0NsaWVudChyZWdpc3RyeVVybCwgc2VydmljZXMgPSBbXSkge1xuICByZXR1cm4gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlID0ge307XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHNlcnZpY2VzLm1hcChhc3luYyAoc2VydmljZU5hbWUpID0+IHtcbiAgICAgICAgc2VydmljZVtzZXJ2aWNlTmFtZV0gPSB7fTtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9ucyA9IGF3YWl0IGdldE9wZXJhdGlvbnMocmVnaXN0cnlVcmwsIHNlcnZpY2VOYW1lKTtcbiAgICAgICAgb3BlcmF0aW9ucy5mb3JFYWNoKCh7IG5hbWUsIGV4ZWN1dGUgfSkgPT4ge1xuICAgICAgICAgIHNlcnZpY2Vbc2VydmljZU5hbWVdW25hbWVdID0gZXhlY3V0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb250ZXh0LnNlcnZpY2UgPSBzZXJ2aWNlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBDb250ZXh0SHlkcnVzQ2xpZW50O1xuIl19