/** product: calculate the product of an array of numbers. */

function product(nums) {
  // base case
  if (!nums.length) return 1;
  // recursive step
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, n = 0, l = 0) {
  // base case
  if (words.length === n) return l;

  // recursive step
  l = words[n].length > l ? words[n].length : l;
  return longest(words, n + 1, l);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, n = 0, otherString = "") {
  // base case
  if (n >= str.length) return otherString;
  // recursive step
  if (n % 2 === 0) {
    otherString += str[n];
  }
  return everyOther(str, n + 1, otherString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, n = 0, rev = "") {
  // base case
  if (n >= str.length) {
    return str === rev ? true : false;
  }
  // recursive step
  rev += str[str.length - n - 1];
  return isPalindrome(str, n + 1, rev);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  // base case
  if (arr[index] === val) return index;
  if (index >= arr.length && arr[index] != val) return -1;
  // recursive step
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, rev = "", n = 0) {
  // base case
  if (n >= str.length) return rev;
  // recursive step
  rev += str[str.length - n - 1];
  return revString(str, rev, n + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    }
    if (typeof obj[key] === "object") {
      arr.push(...gatherStrings(obj[key]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(
  arr,
  val,
  l = 0,
  r = arr.length - 1,
  i = Math.floor((r + l) / 2)
) {
  // base case
  if (arr[i] === val) return i;
  if (r - l === 0) return -1;
  // recursive step
  if (Array.isArray(arr[i])) {
    return binarySearch(arr[i], val);
  }
  if (arr[i] < val) {
    return binarySearch(arr, val, i + 1, r);
  }
  if (arr[i] > val) {
    return binarySearch(arr, val, l, i - 1);
  }
}

function balance(string, stack = [], i = 0) {
  // base case
  if (i >= string.length) {
    if (stack.length) return false;
    else return true;
  }
  // recursive case
  if ("{[(".includes(string[i])) {
    stack.push(string[i]);
  }
  if (string[i] === "}" && stack.pop() != "{") {
    return false;
  }
  if (string[i] === "]" && stack.pop() != "[") {
    return false;
  }
  if (string[i] === ")" && stack.pop() != "(") {
    return false;
  }
  return balance(string, stack, i + 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  balance,
};
