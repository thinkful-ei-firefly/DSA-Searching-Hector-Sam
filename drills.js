const BinarySearchTree = require('./BinarySearchTree');
const Queue = require('./Queues');

// 1.

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 3, 5, 6, 8
// 6, 8
// 8
// it would take 4 steps

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 12, 14, 15, 17, 18
// 17, 18
// it would return null

//3.
function findBook(lib, dewey, title, start = 0, end = lib.length) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (lib[mid].dewey === dewey) {
      if (lib[mid].title === title) {
        return lib[mid];
      }
    }
    if (lib[mid].dewey > dewey) {
      findBook(lib, dewey, title, start, mid - 1);
    }
    if (lib[mid].dewey < dewey) {
      findBook(lib, dewey, title, mid + 1, end);
    }
  }
  return 'Book not found';
}

//4.
// 1)
// in-order: 14 15 19 25 27 35 79 89 90 91 and
// pre-order: 35 25 15 14 19 27 89 79 91 90.
// post-order: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

//post-order: 5, 7, 6, 9, 11, 10, 8
//pre-order: 8, 6, 5, 7, 10, 9, 11

//5.
const BST = new BinarySearchTree();
BST.insert({ key: 25, value: null });
BST.insert({ key: 15, value: null });
BST.insert({ key: 50, value: null });
BST.insert({ key: 10, value: null });
BST.insert({ key: 24, value: null });
BST.insert({ key: 35, value: null });
BST.insert({ key: 70, value: null });
BST.insert({ key: 4, value: null });
BST.insert({ key: 12, value: null });
BST.insert({ key: 18, value: null });
BST.insert({ key: 31, value: null });
BST.insert({ key: 44, value: null });
BST.insert({ key: 66, value: null });
BST.insert({ key: 90, value: null });
BST.insert({ key: 22, value: null });
//console.log(BST);

const preOrder = tree => {
  console.log(tree.key);
  if (tree.left) {
    preOrder(tree.left);
  }
  if (tree.right) {
    preOrder(tree.right);
  }
};
const postOrder = tree => {
  if (tree.left) {
    postOrder(tree.left);
  }
  if (tree.right) {
    postOrder(tree.right);
  }
  console.log(tree.key);
};
const inOrder = tree => {
  if (tree.left) {
    inOrder(tree.left);
  }
  console.log(tree.key);
  if (tree.right) {
    inOrder(tree.right);
  }
};

// console.log('pre-order')
// preOrder(BST)
// console.log('in-order')
// inOrder(BST)
// console.log('post-order')
// postOrder(BST)

//25 15 50 10 24 35 70 4 12 18 31 44 66 90 22

const officers = new BinarySearchTree();
officers.insert({ key: 10, value: 'Captain Picard' });
officers.insert({ key: 8, value: 'Commander Riker' });
officers.insert({ key: 6, value: 'Lt. Cmdr. Worf' });
officers.insert({ key: 9, value: 'Lt. Cmdr. LaForge' });
officers.insert({ key: 5, value: 'Lieutenant security-officer' });
officers.insert({ key: 11, value: 'Commander Data' });
officers.insert({ key: 13, value: 'Lt. Cmdr. Crusher' });
officers.insert({ key: 12, value: 'Lieutenant Selar' });

const queue = new Queue();

function nextOfficer(tree) {
  if (tree.left) {
    queue.enqueue(tree.left);
  }
  if (tree.right) {
    queue.enqueue(tree.right);
  }
  console.log(tree.value);
  if (queue.first) {
    nextOfficer(queue.dequeue());
  }
}
nextOfficer(officers);
//console.log(officers);
