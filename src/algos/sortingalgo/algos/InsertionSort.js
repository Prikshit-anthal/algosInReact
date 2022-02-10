import { swap2ArrayElements } from '../../../constants'

const insertionSort = (blocks) => {
  const dupBlocks = blocks.slice() // copying blocks array
  console.log(dupBlocks)
  const order = []
  let i, j
  for(i=1;i<dupBlocks.length;i++)
  {
      for(j=i;j>0;j--)
      {
          if(dupBlocks[j-1]<=dupBlocks[j])
          {
              break;
          }
        swap2ArrayElements(dupBlocks,j-1,j);
      }
  }

console.log(dupBlocks);

}

export default insertionSort