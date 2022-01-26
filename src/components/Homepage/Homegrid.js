import React from "react";
import Homecard from './Homecard'
import { Homegriddata } from "./Homegriddata";
import './Homegrid.css'
function Homegrid()
{
    return (
      <>
        <div className='homegrid'>
          {Homegriddata.map((item,index) => {
            return <Homecard obj={item} key={index} />
          })}
        </div>
      </>
    )
}

export default Homegrid;