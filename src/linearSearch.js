//function search the array for the value and returns that value 

function linearSearch(arr, value) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === value) {
      return i;
    }
  }
  return -1; 
}

module.exports = linearSearch;