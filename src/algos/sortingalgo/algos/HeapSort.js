import { OrderedListOutlined } from '@ant-design/icons';
import { swap2ArrayElements } from '../../../constants'

const heapSort = (blocks) => {
    
  const dupBlocks = blocks.slice() // copying blocks array
  const order=[]
  // console.log(dupBlocks)
  var dupBlocksLength=dupBlocks.length;
  var gettingMinusLength = dupBlocks.length;


  const Heapify = (node) => {
    if (node >= gettingMinusLength) return
    let max_idx = node

    order.push([2 * node + 1, max_idx, null, null]) //compare
    if (
      2 * node + 1 < gettingMinusLength &&
      dupBlocks[2 * node + 1] > dupBlocks[max_idx]
    )
      max_idx = 2 * node + 1;

    order.push([2 * node + 2, max_idx, null, null]) //compare

    if (
      2 * node + 2 < gettingMinusLength &&
      dupBlocks[2 * node + 2] > dupBlocks[max_idx]
    ) {
      max_idx = 2 * node + 2
    }
    if (max_idx !== node) {
      order.push([node,max_idx,true,null]);//swap
      swap2ArrayElements(dupBlocks, max_idx, node)
      Heapify(max_idx)
    }
  }

  const buildMaxHeap=()=>
  {
     for(let i=parseInt((dupBlocks.length)/2-1);i>=0;i--)
     {
         Heapify(i)
     }
  }
  
  const heapSortprocedure=()=>{
   
    buildMaxHeap()

    for (let i = 0; i < dupBlocksLength; i++) {
     
      order.push([0,dupBlocksLength-i-1,true,null]);//swap
      swap2ArrayElements(dupBlocks,0,dupBlocksLength-1-i);
      order.push([null, null, null, dupBlocksLength - 1 - i]);//sorted
      gettingMinusLength-=1;
      Heapify(0)
    }

  }
  heapSortprocedure();


  // console.log(dupBlocks)
  return [order,blocks]
}

export default heapSort
