import React from "react";
import Homecard from './Homecard'
import { Homegriddata } from "./Homegriddata";
import './Homegrid.css'
function Homegrid()
{
    return (
      <>
        <div className='homegrid'>
          {Homegriddata.map((item) => {
            return <Homecard obj={item} />
          })}
        </div>
      </>
    )
}

export default Homegrid;