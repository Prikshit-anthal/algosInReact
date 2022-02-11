import React, { useEffect,useRef } from "react";
import { Slider,Select,  Button } from 'antd'
const {Option}=Select;

function Nav(props)
{
     const {
       valuerange,
       setValuerange,
       handleSort,
       sortStatus,
       setSortedIndex,
       sortUsed,
       setSortUsed
     } = props.obj

     



   return (
     <>
       <div className='sorting_nav flex justify-between items-center flex-wrap bg-teal-600'>
         <div className='breakFlexWithMe'></div>

         <Button
           type='primary'
           className='shuffle_sort mx-4 '
           disabled={sortStatus}
         >
           Shuffle
         </Button>
         <div className='value_range mx-4'>
           <label className='rangeType flex flex-col text-center'>
             Value range
             {/* <input
               type='range'
               id='imRange'
               onChange={(e) => {
                 setValuerange(e.target.value)
               }}
               min='5'
               max={100}
               step='1'
               // disabled={sorting}
               // value={len}
               defaultValue={valuerange}
               // onInput={setValuerange(0)}
             ></input> */}
             <Slider
               className='w-32'
               min={5}
               max={100}
               //  disabled={sorting}
               disabled={sortStatus}
               defaultValue={valuerange}
               onChange={(value) => {
                 setValuerange(value)
               }}
             />
           </label>
           <div className='text-center'>{valuerange}</div>
         </div>
         <div className='sortalgos mx-4'>
           <div className='drop_down'>
             <Select
               defaultValue={sortUsed}
               disabled={sortStatus}
               onChange={(value) => {
                 setSortUsed(value)
               }}
               className='w-32'
             >
               <Option value='bubbleSort'>Bubble sort</Option>
               <option value='selectionSort'>Selection sort</option>
               <Option value='insertionSort'>Insertion sort</Option>
               <Option value='heapSort'>Heap sort</Option>
               <Option value='mergeSort'>Merge sort</Option>
             </Select>
           </div>
         </div>

         <Button
           type='primary'
           className='sort_visualise  mx-4 '
           disabled={sortStatus}
           onClick={() => {
             setSortedIndex([])
             handleSort()
           }}
         >
           Visualise
         </Button>
       </div>
     </>
   )
}
export default Nav