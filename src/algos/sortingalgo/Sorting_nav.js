import React, { useEffect,useRef } from "react";
import { Table,Slider,Select, Input, Button } from 'antd'
const {Option}=Select;

function Nav(props)
{
     const {
       valuerange,
       setValuerange,
       handleSort,

       setSortedIndex,
       
     } = props.obj

     



   return (
     <>
       <div className='sorting_nav flex justify-between items-center flex-wrap bg-teal-600'>
        
        <div className="breakFlexWithMe"></div>

         <Button type='primary' className='shuffle_sort mx-4 '>
           Shuffle
         </Button>
         <div className='value_range mx-4'>
           <label className='rangeType flex flex-col text-center'>
             Value range
             <input
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
             ></input>
           </label>
           <div className='text-center'>{valuerange}</div>
         </div>
         <div className='sortalgos mx-4'>
           <div className='drop_down'>
             <Select defaultValue='bubble' className='w-32'>
               <Option value='bubble'>Bubble sort</Option>
               <Option value='insertion'>Insertion sort</Option>
               <Option value='heap'>Heap sort</Option>
               <Option value='quick'>Quick sort</Option>
             </Select>
           </div>
         </div>

         <Button
           type='primary'
           className='sort_visualise  mx-4 '
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