import { swap2ArrayElements } from '../../../constants'

const heapSort = (blocks) => {
    
  const dupBlocks = blocks.slice() // copying blocks array
  console.log(dupBlocks)
  var dupBlocksLength=dupBlocks.length;
  var gettingMinusLength = dupBlocks.length;
  const Heapify=(node)=>
  {
      if (node >= gettingMinusLength) return
     let max_idx=node;
     if(2*node+1<gettingMinusLength&&dupBlocks[2*node+1]>dupBlocks[max_idx])
     max_idx=2*node+1;
     if (
       2 * node + 2 <
       gettingMinusLength && dupBlocks[2 * node + 2] >
       dupBlocks[max_idx]
     ) {
       max_idx = 2 * node + 2
     }
    if (max_idx !== node) {
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
  
      swap2ArrayElements(dupBlocks,0,dupBlocksLength-1-i);
      gettingMinusLength-=1;
      Heapify(0)
    }
  }
  heapSortprocedure();


  console.log(dupBlocks)
}

export default heapSort
