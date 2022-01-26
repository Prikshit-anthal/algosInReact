import React, { useRef } from 'react'
import { useState } from 'react/cjs/react.development'
import './Sortingalgo.css'
function Sortingalgo() {
  const [valuerange, setValuerange] = useState(30)
  const [value1range, setValue1range] = useState(30)
  const [value2range, setValue2range] = useState(30)
  return (
    <>
      <div className='sorting_container'>
        <br />
        <div className='sorting_nav'>
          <button className='shuffle'>Shuffle</button>
          <div className='value_range'>
            <label className='rangeType'>
              Val range
              <input
                type='range'
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
          <div style={{   display: 'flex'
    ,flexDirection: 'column'}}>
            Compare
            <div
              className='toggle'
              //   onclick='fn(this)'
              style={{ backgroundColor: 'white', border: '2px solid white' }}
            >
              <label
                className='toggleHelper'
                // onclick='fn1(this)'
                style={{ left: '-5px' }}
              >
                <input
                  type='checkbox'
                  onClick={(e) => {
                    e.target.parentNode.click()

                    if (e.target.parentNode.style.left == '-5px') {
                      e.target.parentNode.style = 'left:15px'
                    } else {
                      e.target.parentNode.style = 'left:-5px'
                    }
                    //console.log(e.target.checked)
                    e.target.checked == true
                      ? (e.target.parentNode.parentNode.style =
                          '    background-color: rgb(111, 217, 243);border: 2px solid rgb(111, 217, 243);')
                      : (e.target.parentNode.parentNode.style =
                          '    background-color: white;border: 2px solid white;')
                  }}
                />
              </label>
            </div>
          </div>

          <button className='sort_visualise'>Visualise</button>
        </div>
        <br />
        <div className='sortingrangearea'>
          <label className='rangeVertical'>
            <div>Speed</div>

            <input
              onChange={(e) => {
                setValue1range(e.target.value)
              }}
              className='impleft'
              type='range'
              min={5}
              max={100}
              step={1}
              defaultValue={value1range}
              style={{ transform: 'rotateZ(0.75turn)' }}
            />
            <div>{value1range}</div>
          </label>
          <div className='sortingarea'>sort here</div>
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
