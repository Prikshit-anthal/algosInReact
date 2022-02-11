import { swap2ArrayElements } from '../../../constants'

const bubbleSort = (blocks) => {
  const dupBlocks = blocks.slice() // copying blocks array
  const order = []
  let i, j

  for (i = 0; i < dupBlocks.length; i++) {
    for (j = 0; j < dupBlocks.length - i - 1; j++) {
      order.push([j, j + 1, null, null]) // Compare
      if (dupBlocks[j] > dupBlocks[j + 1]) {
        swap2ArrayElements(dupBlocks, j, j + 1)
        // order.push([j, j + 1, dupBlocks.slice(), null]) // Swap
        order.push([j, j + 1, true, null])
      }
    }
    order.push([null, null, null, j]) // j-th element is in correct position ( Sorted )
  }


  



 

  return [order, blocks]
}

export default bubbleSort
