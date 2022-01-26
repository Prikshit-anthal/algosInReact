import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import './Sortingalgo.css'
function Sortingalgo()
{
    const handleLength=(e)=>{
     setValuerange(e.target.value)
    }
    const [valuerange,setValuerange]=useState(30);
    return (
      <>
        <div className='sorting_container'>
          <br />
          <div className='sorting_nav'>
            <button className='shuffle'>Shuffle</button>
            <div className='value_range'>Val range</div>
            <div className='sortalgos'>
              <div>ALgorithms</div>
              <div className='drop_down'>drop_down</div>
            </div>
            <label className='rangeType'>
              Compare
              <input
                type='range'
                onChange={handleLength}
                min='5'
                max={100}
                step='1'
                // disabled={sorting}
                // value={len}
                defaultValue={valuerange}
                // onInput={setValuerange(0)}
              ></input>
              <div>{valuerange}</div>
            </label>
            <button className='sort_visualise'>Visualise</button>
          </div>
          <br />
          <div className='sortingrangearea'>
            <label className='rangeVertical'>
              <div>speed</div>
              
              <input
              className="impleft"
                type='range'
                min={5}
                max={100}
                step={1}
                defaultValue={valuerange}
                style={{ transform: 'rotateZ(0.75turn)' }}
              />
            </label>
            <div className='sortingarea'>sort here</div>
            <label className='rangeVertical'>
              Numbers
              
              <input
              className="impright"
                type='range'
                min={5}
                max={100}
                step={1}
                defaultValue={valuerange}
                style={{ transform: 'rotateZ(0.75turn)' }}
              />
            </label>
          </div>
        </div>
      </>
    )
}
export default Sortingalgo