'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _hydrusClient = require('./hydrus-client');

var _hydrusClient2 = _interopRequireDefault(_hydrusClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function appContextHydrusClient() {
  var _this = this;

  var endpoints = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(context) {
      var service;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              service = {};
              _context2.next = 3;
              return Promise.all(endpoints.map(function () {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(endpoint) {
                  var client, services;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          client = new _hydrusClient2.default(endpoint);
                          _context.next = 3;
                          return client.get('__services');

                        case 3:
                          services = _context.sent;

                          services.forEach(function (s) {
                            var _s$name$split = s.name.split('.');

                            var _s$name$split2 = _slicedToArray(_s$name$split, 2);

                            var name = _s$name$split2[0];
                            var operation = _s$name$split2[1];

                            if (!service[name]) {
                              service[name] = {};
                            }
                            service[name][operation] = function () {
                              var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                              return client.post(s.name, data);
                            };
                          });

                        case 5:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                }));

                return function (_x3) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 3:

              context.service = service;

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

exports.default = appContextHydrusClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAtY29udGV4dC1oeWRydXMtY2xpZW50LmpzIl0sIm5hbWVzIjpbImFwcENvbnRleHRIeWRydXNDbGllbnQiLCJlbmRwb2ludHMiLCJjb250ZXh0Iiwic2VydmljZSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJlbmRwb2ludCIsImNsaWVudCIsImdldCIsInNlcnZpY2VzIiwiZm9yRWFjaCIsInMiLCJuYW1lIiwic3BsaXQiLCJvcGVyYXRpb24iLCJkYXRhIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxTQUFTQSxzQkFBVCxHQUFnRDtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQix5REFBSixFQUFJOztBQUM5QztBQUFBLHlEQUFPLGtCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDQyxxQkFERCxHQUNXLEVBRFg7QUFBQTtBQUFBLHFCQUdDQyxRQUFRQyxHQUFSLENBQ0pKLFVBQVVLLEdBQVY7QUFBQSxzRUFBYyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsZ0NBRE0sR0FDRywyQkFBaUJELFFBQWpCLENBREg7QUFBQTtBQUFBLGlDQUVXQyxPQUFPQyxHQUFQLENBQVcsWUFBWCxDQUZYOztBQUFBO0FBRU5DLGtDQUZNOztBQUdaQSxtQ0FBU0MsT0FBVCxDQUFpQixVQUFDQyxDQUFELEVBQU87QUFBQSxnREFDSUEsRUFBRUMsSUFBRixDQUFPQyxLQUFQLENBQWEsR0FBYixDQURKOztBQUFBOztBQUFBLGdDQUNmRCxJQURlO0FBQUEsZ0NBQ1RFLFNBRFM7O0FBRXRCLGdDQUFJLENBQUNaLFFBQVFVLElBQVIsQ0FBTCxFQUFvQjtBQUFFVixzQ0FBUVUsSUFBUixJQUFnQixFQUFoQjtBQUFxQjtBQUMzQ1Ysb0NBQVFVLElBQVIsRUFBY0UsU0FBZCxJQUEyQixZQUFvQjtBQUFBLGtDQUFYQyxJQUFXLHlEQUFKLEVBQUk7O0FBQzdDLHFDQUFPUixPQUFPUyxJQUFQLENBQVlMLEVBQUVDLElBQWQsRUFBb0JHLElBQXBCLENBQVA7QUFDRCw2QkFGRDtBQUdELDJCQU5EOztBQUhZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFkOztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURJLENBSEQ7O0FBQUE7O0FBaUJMZCxzQkFBUUMsT0FBUixHQUFrQkEsT0FBbEI7O0FBakJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQkQ7O2tCQUVjSCxzQiIsImZpbGUiOiJhcHAtY29udGV4dC1oeWRydXMtY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh5ZHJ1c0NsaWVudCBmcm9tICcuL2h5ZHJ1cy1jbGllbnQnO1xuXG5mdW5jdGlvbiBhcHBDb250ZXh0SHlkcnVzQ2xpZW50KGVuZHBvaW50cyA9IFtdKSB7XG4gIHJldHVybiBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB7fTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgZW5kcG9pbnRzLm1hcChhc3luYyAoZW5kcG9pbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IEh5ZHJ1c0NsaWVudChlbmRwb2ludCk7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gYXdhaXQgY2xpZW50LmdldCgnX19zZXJ2aWNlcycpO1xuICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgICAgY29uc3QgW25hbWUsIG9wZXJhdGlvbl0gPSBzLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICBpZiAoIXNlcnZpY2VbbmFtZV0pIHsgc2VydmljZVtuYW1lXSA9IHt9OyB9XG4gICAgICAgICAgc2VydmljZVtuYW1lXVtvcGVyYXRpb25dID0gZnVuY3Rpb24oZGF0YSA9IHt9KSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpZW50LnBvc3Qocy5uYW1lLCBkYXRhKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnRleHQuc2VydmljZSA9IHNlcnZpY2U7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcENvbnRleHRIeWRydXNDbGllbnQ7XG4iXX0=