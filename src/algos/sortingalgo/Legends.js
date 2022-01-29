import React from "react";
import './Legends.css'

function Legends()
{
    return(<>
    <div className="legendContainer">
        <div className="legendItem">Compare <div id="yellow"></div></div>
        <div className="legendItem">Swap <div id="red"></div></div>
        <div className="legendItem">Sorted <div id="green"></div></div>
    </div>
    </>)
}

export default Legends;