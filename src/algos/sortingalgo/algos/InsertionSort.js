import { swap2ArrayElements } from '../../../constants'

const insertionSort = (blocks) => {
  const dupBlocks = blocks.slice() // copying blocks array
  // console.log(dupBlocks)
  const order = []
  let i, j
  for (i = 1; i < dupBlocks.length; i++) {
    for (j = i; j > 0; j--) {
      order.push([j, j - 1, null, null]) // Compare
      if (dupBlocks[j - 1] <= dupBlocks[j]) {
        if (i === dupBlocks.length - 1) {
          for (let x = j; x >= 0; x--) order.push([null, null, null, x])//sort
        }
        break
      }

      swap2ArrayElements(dupBlocks, j - 1, j)
      order.push([j, j - 1, true, null]) //swap
      if (i === dupBlocks.length - 1) {
        order.push([null, null, true, j]) //sorted
      }
    }
    
  }

// console.log(dupBlocks);
return [order, blocks]
}

export default insertionSort