import Diff from './base';

export const arrayDiff = new Diff();
arrayDiff.tokenize = arrayDiff.join = function(value) {
  return value.slice();
};
arrayDiff.equals = function(left, right) {
  // Checks if we have a comparator defined in the options and
  // executes it otherwise fallback to the default comparator
  if (typeof this.options.comparator === 'function') {
    return this.options.comparator(left, right);
  } else {
    return left === right
      || (this.options.ignoreCase && left.toLowerCase() === right.toLowerCase());
  }
};

export function diffArrays(oldArr, newArr, callback) { return arrayDiff.diff(oldArr, newArr, callback); }
