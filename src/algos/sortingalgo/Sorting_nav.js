import React, { useEffect,useRef } from "react";
import { Table,Slider, Input, Button } from 'antd'

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
             <Input
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
             ></Input>
             <Slider
               min={5}
               max={100}
              //  onChange={this.onChange}
              //  value={typeof inputValue === 'number' ? inputValue : 0}
             />
           </label>
           <div>{valuerange}</div>
         </div>
         <div className='sortalgos'>
           <div>ALgorithms</div>
           <div className='drop_down'>
             <select>
               <option value='volvo'>Bubble sort</option>
               <option value='saab'>Insertion sort</option>
               <option value='mercedes'>Heap sort</option>
               <option value='audi'>Quick sort</option>
             </select>
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