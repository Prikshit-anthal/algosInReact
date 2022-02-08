//imports
import React, { useRef, useEffect, useState } from 'react'
import './Sortingalgo.css'
import Sorting_nav from './Sorting_nav'
import bubbleSort from './algos/Bubblesort'
import Bars from '../../components/Bars/Bars'
import Legends from './Legends'
import { Table, Input, Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import {TableSyntax} from './SortConstants'
function Sortingalgo() {
  // All useStates
  const [valuerange, setValuerange] = useState(80)
  const [sortSpeed, setSortSpeed] = useState(50)
  const [value2range, setValue2range] = useState(20)
  const [randArr, setrandArr] = useState([])
  const [compare, setCompare] = useState([])
  const [swap, setSwap] = useState([])
  const [sortedIndex, setSortedIndex] = useState([])
  const [sortStatus, setSortStatus] = useState(false)
  const arrInputREf = useRef(null)

  useEffect(() => {
    arrInputREf.current.setAttribute(
      'onkeypress',
      'return /^[0-9,\b]+$/i.test(event.key)'
    )
    arrInputREf.current.setAttribute('onpaste', 'return false;')
  })

  //sort stat results array
  const [resultsArr, setResultsArr] = useState([])

  const setInputArr = () => {
    //  console.log('hi')
    setSortedIndex([])
    let initIndex = 0
    let commaIdx = arrInputREf.current.value.indexOf(',', 0)
    // console.log(commaIdx)
    var arr = []
    while (commaIdx != -1) {
      arr.push(
        Number(String(arrInputREf.current.value).substring(initIndex, commaIdx))
      )
      initIndex = commaIdx + 1
      commaIdx = arrInputREf.current.value.indexOf(',', initIndex)
    }
    arr.push(
      Number(
        String(arrInputREf.current.value).substring(
          initIndex,
          arrInputREf.current.value.length
        )
      )
    )
    if (arr.length > 100) {
      alert('Max array length:100')
      return
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 100 || arr[i] == 0) {
        alert('array range:[0,100] input syntax:[val1,val2]')
        return
      }
    }
    //console.log(arr);
    setrandArr(arr)
  }

  //getting random array
  useEffect(() => {
    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    //event listener for shuffle Button so it calls setarr fn
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

  //disabling no using Button while soting is going on
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
      var order = op

      //creating temporary obj to copy at last in resultsArr
      var tempo = {
        sort: 'Bubble',
        comparison: 0,
        swap: 0,
        vis: 0,
        arrResult: randArr,
        arrUsed:randArr
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
                tempo.arrResult = arr

                setrandArr(arr)
                if (j !== null || k != null) setSwap([j, k])

                tempo.swap++
              }
            }, (100 * 40) / countRef.current) //dynamic changing of speed

            setTimeout(resolve, (100 * 40) / countRef.current) //returning promise
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

      //sort Sttus false to un-disable Buttons
      setSortStatus(false)
    }

    //sort is starting do this to disable some Buttons
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
            setSortedIndex: setSortedIndex,
          }}
        />

        <div className='sortingrangearea flex justify-between items-center relative '>
          {/* left align speed bar */}

          <label className='addArray absolute top-16 left-1 flex '>
            <Button style={{ height: '100%', padding: '6px' }} onClick={(e)=>{
              var buttonRef=document.getElementById('rotateDown');

              
              buttonRef.classList.toggle('active');

             
              var ref = arrInputREf.current.parentNode.parentNode;
                // ref.style.width ===
                // '100%'?ref.style.width='0':ref.style.width='100%';
                ref.id === 'visibleArrayInput'?ref.id='hiddenArrayInput':ref.id='visibleArrayInput';
            }}>
              {' '}
              <LeftOutlined className='text-2xl' id='rotateDown' style={{ marginLeft: '0' }} />
            </Button>

            <span>
              {' '}
              <div  className='flex flex-col w-0' id='hiddenArrayInput' style={{overflow:'hidden',transition: 'width 1s'}}>
                <div className='flex h-10'>
                  <input
                    type='text'
                    placeholder='&nbsp;&nbsp;&nbsp;Enter array'
                    ref={arrInputREf}
                    className='w-36'
                  />
                  <Button type='primary' onClick={setInputArr} style={{height:'2.5rem'}}>
                    Set
                  </Button>
                </div>
              </div>
            </span>
          </label>

          <label className='rangeVertical'>
            <div>Speed</div>

            <Input
              onChange={(e) => {
                setSortSpeed(e.target.value)
              }}
              className='impleft mt-24'
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
            <div className='barsArea'>
              <Bars
                arr={randArr}
                compare={sortStatus && compare}
                swap={sortStatus && swap}
                sorted={sortedIndex}
                // shuffle={didShuffle}
              />
            </div>

            {/*For representation of colours in bars  */}
            <br />
            <Legends />
            <br />

            {resultsArr.length === 0 ? (
              <></>
            ) : (
              <Table
                className='mx-auto'
                style={{ width: '75vw' }}
                columns={TableSyntax}
                dataSource={resultsArr}
                pagination={{
                  position: ['none', 'none'],
                }}
                scroll={{ x: 1300, y: 400 }}
              />
            )}
            {/* results shown of sort i table */}
          </div>

          {/* right align num bar */}
          <label className='rangeVertical'>
            Num
            <Input
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
