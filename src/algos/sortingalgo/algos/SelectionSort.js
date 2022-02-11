import { swap2ArrayElements } from '../../../constants'

const selectionSort = (blocks) => {
  const dupBlocks = blocks.slice() // copying blocks array
  // console.log(dupBlocks)
  const order = []
  let i, j,max_idx
  for (i = dupBlocks.length - 1; i >= 0; i--) {
    max_idx = i
    for (j = i; j > 0; j--) {
      order.push([max_idx, j - 1, null, null]) // Compare
      if (dupBlocks[j - 1] >= dupBlocks[max_idx]) {
        max_idx = j - 1
      }
    }
    order.push([i, max_idx, true, null]) //swap
    swap2ArrayElements(dupBlocks, max_idx, i)
     order.push([null, null, true, i])//sort
    
  }

  // console.log(dupBlocks)
  return [order, blocks]
}

export default selectionSort
