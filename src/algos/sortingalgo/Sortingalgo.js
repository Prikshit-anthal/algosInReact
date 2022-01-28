import React, { useRef, useEffect, useState } from 'react'
import './Sortingalgo.css'
import Sorting_nav from './Sorting_nav'
import bubbleSort from './algos/Bubblesort'
import Bars from '../../components/Bars/Bars'

function Sortingalgo() {
  const [valuerange, setValuerange] = useState(30)
  const [sortSpeed, setSortSpeed] = useState(30)
  const [value2range, setValue2range] = useState(30)
  const [randArr, setrandArr] = useState([])
  const [compare, setCompare] = useState([])
  const [swap, setSwap] = useState([])
  const [sortedIndex, setSortedIndex] = useState([])
  const [sortStatus,setSortStatus]=useState(false);
  //const [sortSpeed,setSortSpeed]=useState(500);
    const speed = 50;

  useEffect(() => { 
    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    var shuf_but=document.getElementsByClassName('shuffle_sort')[0];
    shuf_but.addEventListener('click', () => {setarr()});

    function setarr(){
    setrandArr((arr) => {
      var temp = []
      for (var i = 0; i < value2range; i++) {
        temp.push(getRandomInt(5, valuerange))
      }
      // console.log(temp);
      setrandArr(temp)
    })
  }
  setarr();
    // returned function will be called on component unmount
    return () => {
      shuf_but.removeEventListener('click', () => {
        setarr();
      });
    }
  }, [value2range, valuerange])


//console.log(randArr);

  // useEffect(() => {
    
  //   var visualise_butt = document.getElementsByClassName('sort_visualise')[0];
  //   visualise_butt.addEventListener('click',()=>{
  //           handleSort();
  //   })

  //    return () => {
  //      visualise_butt.removeEventListener('click', () => {
  //        //sortAccOrder(bubbleSort(randArr))
  //        handleSort();
  //      })
  //    }

  // }, [randArr])


//mistake multiple eventlisteners lgre the toh n times jitni baar dbaya
//  array bnre the hr state ke


useEffect(()=>{
  if(sortStatus==true)
  {
    document.getElementsByClassName('impright')[0].disabled=true;
    document.getElementById('imRange').disabled=true;
   document.getElementsByClassName('sort_visualise')[0].disabled = true;

  }
  else{
        document.getElementsByClassName('impright')[0].disabled = false
        document.getElementById('imRange').disabled = false
        document.getElementsByClassName('sort_visualise')[0].disabled = false
  }
},[sortStatus])

const timerRef = useRef(null)

// useEffect(()=>{
// clearTimeout(timerRef.current);
// console.log((100 * 500) / sortSpeed)

// },[sortSpeed]);

 const countRef = useRef(sortSpeed);
  countRef.current = sortSpeed;


const handleSort = () => {



 async function sortAccOrder(order){
   for(var idx=0;idx<order.length;idx++)
   { //console.log('speed ' + countRef.current)
   function tooth (){
   return new Promise((resolve) => {
     
     setTimeout(() => {
       //console.log('hi' + idx)
       const [j, k, arr, index] = order[idx]
               setCompare([j, k])
               setSwap([])

               if (index !== null) {
                 setSortedIndex((prevState) => [...prevState, index])
               }

               if (arr) {
                 //console.log(arr)
                 setrandArr(arr)
                 if (j !== null || k != null) setSwap([j, k])
               }

              
     },(100*100)/countRef.current);

     setTimeout(resolve, (100 * 100) / countRef.current)
    })
  }
 await tooth();
   }
   setSortStatus(false);
  
 }

  // const sortAccOrder = (order) => {
  //   ;(function loop(i) {
  //     countRef.current = sortSpeed
  //     console.log(countRef.current+"  out fn");
  //   //  console.log(currSpeed + ' curr')
  //     setTimeout(() => {
  //       function A(val) {
  //         const [j, k, arr, index] = order[i]
  //         setCompare([j, k])
  //         setSwap([])

  //         if (index !== null) {
  //           setSortedIndex((prevState) => [...prevState, index])
  //         }

  //         if (arr) {
  //           //console.log(arr)
  //           setrandArr(arr)
  //           if (j !== null || k != null) setSwap([j, k])
  //         }

  //         if (++i < order.length) {
  //           console.log(val + ' sorts')
  //           loop(i)
  //         } else {
  //           setSortStatus(false)
  //           // setCompleted(true)
  //         }
  //       }
  //       A(countRef.current);
  //     }, (100 * 500) / countRef.current)
  //   })(0)
    
  // }

  // setSorting(true)
  setSortStatus(true)
 // console.log((100 * 100) / sortSpeed)
  //console.log(randArr)
  sortAccOrder(bubbleSort(randArr))
  // algo === 'bubbleSort'
  //   ? sortAccOrder(bubbleSort(blocks))
  //   : algo === 'insertionSort'
  //   ? sortAccOrder(insertionSort(blocks))
  //   : algo === 'selectionSort'
  //   ? sortAccOrder(selectionSort(blocks))
  //   : algo === 'mergeSort'
  //   ? sortAccOrder(mergeSort(blocks))
  //   : algo === 'quickSort'
  //   ? sortAccOrder(quickSort(blocks))
  //   : (() => {
  //       setSorting(false)
  //       setCompleted(true)
  //     })()
}





  return (
    <>
      <div className='sorting_container'>
        <Sorting_nav
          obj={{
            valuerange: valuerange,
            setValuerange: setValuerange,
            handleSort: handleSort
          }}
        />
        <div className='sortingrangearea'>
          <label className='rangeVertical'>
            <div>Speed</div>

            <input
              onChange={(e) => {
                setSortSpeed(e.target.value)
              }}
              className='impleft'
              type='range'
              min={5}
              max={100}
              step={1}
              defaultValue={sortSpeed}
              style={{ transform: 'rotateZ(0.75turn)' }}
            />
            <div>{sortSpeed}</div>
          </label>
          <div className='sortingarea'>
            <Bars
              arr={randArr}
              compare={sortStatus && compare}
              swap={sortStatus && swap}
              sorted={sortedIndex}
            />
          </div>
          <label className='rangeVertical'>
            Num
            <input
              onChange={(e) => {
                setValue2range(e.target.value)
              }}
              className='impright'
              type='range'
              min={5}
              max={100}
              step={1}
              defaultValue={value2range}
              style={{ transform: 'rotateZ(0.75turn)' }}
            />
            <div>{value2range}</div>
          </label>
        </div>
      </div>
    </>
  )
}
export default Sortingalgo
