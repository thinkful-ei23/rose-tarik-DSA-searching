//function search the array for the value and returns that value 

function linearSearch(arr, value) {
  let count= 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === value) {
      return {count, index: i};
    }
    count++;
  }
  return {count, index: -1}; 
}

module.exports = linearSearch;