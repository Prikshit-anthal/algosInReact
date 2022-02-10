import { swap2ArrayElements } from '../../../constants'

const mergeSort = (blocks) => {
  const dupBlocks = blocks.slice() // copying blocks array
  console.log(dupBlocks)
 
  const mergeSortWorking=(r,l)=>{
        let mid_idx=parseInt((r+l)/2);
        let temp_arr=[],i,j;
        if(r===l)
        return;
        mergeSortWorking(r,mid_idx);
        mergeSortWorking(mid_idx+1,l);

        for(i=r,j=mid_idx+1;i<=mid_idx && j<=l;)
        {
            if (dupBlocks[i] < dupBlocks[j])
            {
              temp_arr.push(dupBlocks[i]);
              i++;
            }
            else
            {
              temp_arr.push(dupBlocks[j]);
              j++;
                
              }
              
        }
        if(i!==mid_idx+1)
        {
           for(;i<=mid_idx;i++)
           temp_arr.push(dupBlocks[i]);
        }
        else if(j!==l+1)
        {
          for(;j<=l;j++)
          temp_arr.push(dupBlocks[j]);
         }
         for(let i=r;i<=l;i++)
         dupBlocks[i]=temp_arr[i-r];
        
  }
  mergeSortWorking(0,dupBlocks.length-1);

  console.log(dupBlocks)
}

export default mergeSort
