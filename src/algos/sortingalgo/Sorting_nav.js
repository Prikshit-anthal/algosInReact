import React, { useEffect,useRef } from "react";

function Nav(props)
{
     const {
       valuerange,
       setValuerange,
       handleSort,
       randArr,
       setrandArr,
       setSortedIndex,
     } = props.obj

     const arrInputREf=useRef(null);
     useEffect(()=>{
      arrInputREf.current.setAttribute('onkeypress', 'return /^[0-9,\b]+$/i.test(event.key)');
      arrInputREf.current.setAttribute('onpaste', 'return false;')
     })


     const setInputArr=()=>{
    //  console.log('hi')
    setSortedIndex([]);
    let initIndex=0
    let commaIdx=arrInputREf.current.value.indexOf(',', 0);
   // console.log(commaIdx)
    var arr=[];
    while(commaIdx!=-1)
    {

       arr.push(Number(String(arrInputREf.current.value).substring(initIndex,commaIdx)));
       initIndex=commaIdx+1;
       commaIdx = arrInputREf.current.value.indexOf(',',initIndex);

    }
    arr.push(Number(
      String(arrInputREf.current.value).substring(
        initIndex,
        arrInputREf.current.value.length
      )
    ))
    if(arr.length>100)
    {
      alert('Max array length:100');
      return;
    }
    for(var i=0;i<arr.length;i++)
    {
      if(arr[i]>100||arr[i]==0)
      {
        alert('array range:[0,100] input syntax:[val1,val2]');
        return
      }
    }
    //console.log(arr);
    setrandArr(arr);

     }
   return (
     <>
       <div className='sorting_nav'>
         <button className='shuffle_sort'>Shuffle</button>
         <div className='value_range'>
           <label className='rangeType'>
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
             <select>
               <option value='volvo'>Bubble sort</option>
               <option value='saab'>Insertion sort</option>
               <option value='mercedes'>Heap sort</option>
               <option value='audi'>Quick sort</option>
             </select>
           </div>
         </div>
         <div style={{ display: 'flex', flexDirection: 'column' }}>
           Enter Array
           <input
             type='text'
             ref={arrInputREf}
             style={{overflow:"scroll"}}
           />
           <button onClick={setInputArr}>Set Arr</button>
         </div>
         <button className='sort_visualise' onClick={()=>{
           setSortedIndex([]);
           handleSort()}}>
           Visualise
         </button>
       </div>
     </>
   )
}
export default Nav