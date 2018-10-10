

function binarySearch(arr, value, min=0, max=arr.length-1, count=0) {
  if (min > max) {
    return {count, index: -1};
  }

  let index = Math.floor((min + max)/2);
  let item = arr[index];

  if (item === value) {
    count++;
    return {count, index}; 
  }

  else if (item < value) {
    count++;
    return binarySearch(arr, value, index+1 , max, count);
  }

  else if (item > value) {
    count++;
    return binarySearch(arr, value, min, index-1 , count);
  }
}

module.exports = binarySearch;