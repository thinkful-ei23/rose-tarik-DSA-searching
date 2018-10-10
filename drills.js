//Find a book
//Imagine you are looking for a book in a library with a Dewey Decimal index. 
//How would you go about it? Can you express this process as a searching algorithm?
 
//most efficient kind of algorithm: 
//input is a sorted list so can use binary search to find main class
//each time iterate through it we cut input in half  
//main class identified by first digit
//look at first digit and find matching digit in main classes
//repeat for subdividions (2nd digit) and subsections (3rd digit) using binary search 
//once you get to the right category (class-division-section), to find the specific book using title
//linear search through books in that class-division-section by title to find the one that matches 
//best case runtime is O(log n)


//Using your Binary Search Tree class, create a Binary Search Tree with the following dataset: 
//25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. 
//Implement in-order, pre-order, and post-order functions. Check your answers:
//InOrder: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
//A Pre-order traversal should give you the following order: 
//25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
//Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
const BinarySearchTree = require ('./BST'); 

function main() {
  let tree = new BinarySearchTree();
  const seq = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  seq.forEach(num => tree.insert(num)); 

  console.log(tree.inOrder());
  console.log(tree.preOrder());
  console.log(tree.postOrder());
  let sharePriceTree = new BinarySearchTree();
  let prices = [128, 97, 121, 123, 98, 97, 105];
  prices.forEach(price => sharePriceTree.insert(price));
  maxProfit(sharePriceTree);
  eggDrop();
}

function maxProfit(tree) {
  const sortedTree = tree.inOrder();
  const maxProf = sortedTree[sortedTree.length - 1] - sortedTree[0];
  console.log('The max profit for this dataset is: ', maxProf);
  return maxProf;
}

function eggDrop(n=14, sum=14) { //sum is >= 100 is base case

  console.log(`We're at the ${n}th floor`);

  if(sum === 99) { //base case
    console.log(`We've reached the top floor`);
    return;
  }
  else {  
    sum+=n; 
    return n + eggDrop(n-1, sum);
  }
}

main();

