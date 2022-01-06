import React from "react";
import { useEffect } from "react";
import './Box.css'
function Box(props)
{
    useEffect(() => {
        const {
          width = '1rem',
          height = '1rem',
          colour = 'white',
          z_index=0,
          children,
        } = props
        
        var box_ref = document.getElementById('box')
        box_ref.style.width = width
        box_ref.style.height = height
        box_ref.style.backgroundColor = colour
        box_ref.style.zIndex=z_index
        
        // console.log(document.getElementById('box').style.width)
    }, [])
    
    

    return(<>
    <div id="box" ></div>
    </>)
}

export default Box