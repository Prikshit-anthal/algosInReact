import React, { useEffect, useState } from "react";
import './Bars.css'

function Bars({compare,swap,shuffle,sorted,arr})
{

    const width=80/arr.length;
    const height=70/100;


return(<>
<div className="bars_container">
    {
        arr.map((val,i)=>{
            let bg = 'black'
            console.log(compare);
            // i th element is being compared with some other element
            if (compare && (i === compare[0] || i === compare[1])) {
              bg = '#ffff50'
            }

            if (swap && (i === swap[0] || i === swap[1])) {
              bg = 'red'
              
            }
            // i th element is in its correct position
            if (sorted && sorted.includes(i)) {
              bg = '#4bc52e'
            }
            if(shuffle==true)
            bg='black';
            const style = {
              backgroundColor: bg,
              width: `${width}vw`,
              height: `${height * val}vh`,
            }
            //console.log(index);
            return(
                <div className="bar_item" key={i} style={style}></div>
            )

        })
    }
</div>
</>)
}

export default Bars;