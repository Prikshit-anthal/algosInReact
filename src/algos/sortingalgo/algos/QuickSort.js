import { swap2ArrayElements } from '../../../constants'

const quickSort = (blocks) => {
  const dupBlocks = blocks.slice() // copying blocks array
  console.log(dupBlocks)
  const order = []
  let i, j, max_idx
  for (i = dupBlocks.length - 1; i > 0; i--) {
    max_idx = i
    for (j = i; j > 0; j--) {
      if (dupBlocks[j - 1] >= dupBlocks[max_idx]) {
        max_idx = j - 1
      }
    }
    swap2ArrayElements(dupBlocks, max_idx, i)
  }

  console.log(dupBlocks)
}

export default quickSort
