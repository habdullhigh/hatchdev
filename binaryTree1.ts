type treeNode<T> = [val:T,parent:number]
type TreeType ="binary"|"M-ary tree"

interface IBinaryTree<T>{
  root: treeNode<T>|null;
  type: TreeType
  Tree:treeNode<T>[];
  BinaryInsert(val:treeNode<T>):void
  // retrieve():treeNode<T> //essentially traverse through a tree
}

class BT<T> implements IBinaryTree<T>{
  root: treeNode<T>|null
  type: TreeType;
  Tree:treeNode<T>[]=[]
  constructor(treeType:TreeType){
    this.root =null
    this.type =treeType
  }
  
  BinaryInsert(val:treeNode<T>){
    if (this.type != "binary")return "this method is only for binary trees";
    if(this.root === null){
      if(val[1] != -1){
        console.log("the value of the parent of the rootnode of a tree is -1")
        val[1] = -1
      }
      this.root = val
      this.Tree.push(val)
      return"Added root";
    }
    while(this.Tree.length>0){
      let lastParent = this.Tree[this.Tree.length-1][1]
      //this sets last parent equal to the last element in the array
      if(this.Tree.length<=2){
        val[1] = 1
        this.Tree.push(val)
        return;
        //This condition ensures that the root and its branches have the right indexing
      }
      else if(lastParent !== this.Tree[this.Tree.length-2][1]){
        //this basically checks the last two elements in the array to see if they were of the same index or not
        val[1] =lastParent
        this.Tree.push(val)
        return;
      }
      else{
        val[1]= lastParent+1
        this.Tree.push(val)
        return `former node ${lastParent-1} full`;
      }
    }
     

  }
  // retrieve(): treeNode<T> {
    // return 
  // }
}

const bt1 = new BT<number>("binary")

bt1.BinaryInsert([1,0])
bt1.BinaryInsert([2,9])
bt1.BinaryInsert([3,0])
bt1.BinaryInsert([4,9])
bt1.BinaryInsert([5,0])
bt1.BinaryInsert([6,9])
bt1.BinaryInsert([7,0])
bt1.BinaryInsert([8,9])
bt1.BinaryInsert([9,9])
bt1.BinaryInsert([10,0])
bt1.BinaryInsert([11,9])

console.log(bt1.Tree)
