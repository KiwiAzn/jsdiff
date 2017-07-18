/*istanbul ignore start*/'use strict';

exports.__esModule = true;
exports.arrayDiff = undefined;
exports. /*istanbul ignore end*/diffArrays = diffArrays;

var /*istanbul ignore start*/_base = require('./base') /*istanbul ignore end*/;

/*istanbul ignore start*/var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*istanbul ignore end*/var arrayDiff = /*istanbul ignore start*/exports. /*istanbul ignore end*/arrayDiff = new /*istanbul ignore start*/_base2['default'] /*istanbul ignore end*/();
arrayDiff.tokenize = arrayDiff.join = function (value) {
  return value.slice();
};
arrayDiff.equals = function (left, right) {
  // Checks if we have a comparator defined in the options and
  // executes it otherwise fallback to the default comparator
  if (typeof this.options.comparator === 'function') {
    return this.options.comparator(left, right);
  } else {
    return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
  }
};

function diffArrays(oldArr, newArr, callback) {
  return arrayDiff.diff(oldArr, newArr, callback);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2FycmF5LmpzIl0sIm5hbWVzIjpbImRpZmZBcnJheXMiLCJhcnJheURpZmYiLCJ0b2tlbml6ZSIsImpvaW4iLCJ2YWx1ZSIsInNsaWNlIiwiZXF1YWxzIiwibGVmdCIsInJpZ2h0Iiwib3B0aW9ucyIsImNvbXBhcmF0b3IiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJvbGRBcnIiLCJuZXdBcnIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Z0NBaUJnQkEsVSxHQUFBQSxVOztBQWpCaEI7Ozs7Ozt1QkFFTyxJQUFNQyxpRkFBWSx3RUFBbEI7QUFDUEEsVUFBVUMsUUFBVixHQUFxQkQsVUFBVUUsSUFBVixHQUFpQixVQUFTQyxLQUFULEVBQWdCO0FBQ3BELFNBQU9BLE1BQU1DLEtBQU4sRUFBUDtBQUNELENBRkQ7QUFHQUosVUFBVUssTUFBVixHQUFtQixVQUFTQyxJQUFULEVBQWVDLEtBQWYsRUFBc0I7QUFDdkM7QUFDQTtBQUNBLE1BQUksT0FBTyxLQUFLQyxPQUFMLENBQWFDLFVBQXBCLEtBQW1DLFVBQXZDLEVBQW1EO0FBQ2pELFdBQU8sS0FBS0QsT0FBTCxDQUFhQyxVQUFiLENBQXdCSCxJQUF4QixFQUE4QkMsS0FBOUIsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9ELFNBQVNDLEtBQVQsSUFDRCxLQUFLQyxPQUFMLENBQWFFLFVBQWIsSUFBMkJKLEtBQUtLLFdBQUwsT0FBdUJKLE1BQU1JLFdBQU4sRUFEeEQ7QUFFRDtBQUNGLENBVEQ7O0FBV08sU0FBU1osVUFBVCxDQUFvQmEsTUFBcEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxRQUFwQyxFQUE4QztBQUFFLFNBQU9kLFVBQVVlLElBQVYsQ0FBZUgsTUFBZixFQUF1QkMsTUFBdkIsRUFBK0JDLFFBQS9CLENBQVA7QUFBa0QiLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlmZiBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgY29uc3QgYXJyYXlEaWZmID0gbmV3IERpZmYoKTtcbmFycmF5RGlmZi50b2tlbml6ZSA9IGFycmF5RGlmZi5qb2luID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnNsaWNlKCk7XG59O1xuYXJyYXlEaWZmLmVxdWFscyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gIC8vIENoZWNrcyBpZiB3ZSBoYXZlIGEgY29tcGFyYXRvciBkZWZpbmVkIGluIHRoZSBvcHRpb25zIGFuZFxuICAvLyBleGVjdXRlcyBpdCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gdGhlIGRlZmF1bHQgY29tcGFyYXRvclxuICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb21wYXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb21wYXJhdG9yKGxlZnQsIHJpZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHRcbiAgICAgIHx8ICh0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSAmJiBsZWZ0LnRvTG93ZXJDYXNlKCkgPT09IHJpZ2h0LnRvTG93ZXJDYXNlKCkpO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkFycmF5cyhvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spIHsgcmV0dXJuIGFycmF5RGlmZi5kaWZmKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjayk7IH1cbiJdfQ==
