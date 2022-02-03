//imports
import React, { useRef, useEffect, useState } from 'react'
import './Sortingalgo.css'
import Sorting_nav from './Sorting_nav'
import bubbleSort from './algos/Bubblesort'
import Bars from '../../components/Bars/Bars'
import Legends from './Legends'

function Sortingalgo() {
  // All useStates
  const [valuerange, setValuerange] = useState(30)
  const [sortSpeed, setSortSpeed] = useState(30)
  const [value2range, setValue2range] = useState(30)
  const [randArr, setrandArr] = useState([])
  const [compare, setCompare] = useState([])
  const [swap, setSwap] = useState([])
  const [sortedIndex, setSortedIndex] = useState([])
  const [sortStatus, setSortStatus] = useState(false)
  
  //sort stat results array
  const [resultsArr, setResultsArr] = useState([
    { sort: '', comparison: 0, swap: 0, vis: 0 },
  ])

  //getting random array 
  useEffect(() => {
    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    //event listener for shuffle button so it calls setarr fn
    var shuf_but = document.getElementsByClassName('shuffle_sort')[0]
    shuf_but.addEventListener('click', setarr)

    function setarr() {
      setSortedIndex([])

      setrandArr((arr) => {
        var temp = []
        for (var i = 0; i < value2range; i++) {
          temp.push(getRandomInt(5, valuerange))
        }

        setrandArr(temp)
      })
    }
    setarr()

    //removing eventlistener to avoid multiple eventlisteners and abrupt behavior
    return function cleanupListener() {
      shuf_but.removeEventListener('click', setarr)
    }
  }, [value2range, valuerange])

  //disabling no using button while soting is going on
  useEffect(() => {
    if (sortStatus == true) {
      document.getElementsByClassName('impright')[0].disabled = true
      document.getElementById('imRange').disabled = true
      document.getElementsByClassName('sort_visualise')[0].disabled = true
    } else {
      document.getElementsByClassName('impright')[0].disabled = false
      document.getElementById('imRange').disabled = false
      document.getElementsByClassName('sort_visualise')[0].disabled = false
    }
  }, [sortStatus])

  //reference for latest value for setTimeout
  const countRef = useRef(sortSpeed)
  countRef.current = sortSpeed

  //working fn which calls sort and extract infor from returned array
  const handleSort = () => {
    //visibility time of sorting going on
    var vis_time = 0

    //async fn and promise used to change setTimeout time intervals
    //so speed can be changed
    async function sortAccOrder(op) {
      //getting order arr which contains sort info
      var order = op;

      //creating temporary obj to copy at last in resultsArr
      var tempo = {
        sort: 'Bubble',
        comparison: 0,
        swap: 0,
        vis: 0,
      }

      //looping order array with promise to avoid skipping 
      for (var idx = 0; idx < order.length; idx++) {
        function tooth() {
          return new Promise((resolve) => {
            setTimeout(() => {
              //console.log('hi' + idx)
              const [j, k, arr, index] = order[idx]

              setCompare([j, k])

              tempo.comparison++

              setSwap([])

              if (index !== null) {
                setSortedIndex((prevState) => [...prevState, index])
              }

              if (arr) {
                //console.log(arr)
                setrandArr(arr)
                if (j !== null || k != null) setSwap([j, k])

                tempo.swap++
              }
            }, (100 * 40) / countRef.current)//dynamic changing of speed

            setTimeout(resolve, (100 * 40) / countRef.current)//returning promise
          })
        }
        //performance.now() to get visualiser time took
        let startTime = performance.now()

        await tooth()
        let endTime = performance.now()

        //storing data in tempo obj
        vis_time += endTime - startTime
        tempo.vis = vis_time
      }

      //appending results arr with tempo
      let updateUsers = [...resultsArr, tempo]

      setResultsArr(updateUsers)

      //sort Sttus false to un-disable buttons
      setSortStatus(false)
    }

    //sort is starting do this to disable some buttons
    setSortStatus(true)

    //calling sort
    var op = bubbleSort(randArr)
    // console.log(op[1]+" ms");
    sortAccOrder(op)

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
        {/* sorting navbar */}
        <Sorting_nav
          obj={{
            valuerange: valuerange,
            setValuerange: setValuerange,
            handleSort: handleSort,
            randArr: randArr,
            setrandArr: setrandArr,
            setSortedIndex:setSortedIndex,
          }}
        />
        <div className='sortingrangearea'>
          {/* left align speed bar */}
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
              // transform used to show it vertical
              style={{ transform: 'rotateZ(0.75turn)' }}
            />
            <div>{sortSpeed}</div>
          </label>
          {/* middle area for sorting show */}
          <div className='sortingarea'>
            {/* bars giving us bars of given data wiith particular colour needed */}
            <Bars
              arr={randArr}
              compare={sortStatus && compare}
              swap={sortStatus && swap}
              sorted={sortedIndex}
              // shuffle={didShuffle}
            />

            {/*For representation of colours in bars  */}
            <Legends />

            {/* results shown of sort i table */}
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Sort used</th>
                  <th>Comparisons done</th>
                  <th>Swaps done</th>
                  <th>Visualise Time</th>
                </tr>
              </thead>
              {/* mapping resultsArr for showing results */}
              <tbody id='resultsOfAlgos'>
                {resultsArr.map((val, index) => {
                  if (index != 0)
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{val.sort}</td>
                        <td>{val.comparison}</td>
                        <td>{val.swap}</td>
                        <td>{val.vis / 1000}s</td>
                      </tr>
                    )
                })}
              </tbody>
            </table>
          </div>
          {/* right align num bar */}
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
