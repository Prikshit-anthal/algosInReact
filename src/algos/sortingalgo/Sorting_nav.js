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
       <div className='sorting_nav flex justify-between items-center bg-teal-600'>
         <Button type='primary' className='shuffle_sort'>
           Shuffle
         </Button>
         <div className='value_range'>
           <label className='rangeType flex flex-col text-center'>
             Val range
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
           <div>{valuerange}</div>
         </div>
         <div className='sortalgos'>
           <div>ALgorithms</div>
           <div className='drop_down'>
             <Select defaultValue='bubble' className="w-32">
               <Option value='bubble'>Bubble sort</Option>
               <Option value='insertion'>Insertion sort</Option>
               <Option value='heap'>Heap sort</Option>
               <Option value='quick'>Quick sort</Option>
             </Select>
           </div>
         </div>

         <Button
           type='primary'
           className='sort_visualise'
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