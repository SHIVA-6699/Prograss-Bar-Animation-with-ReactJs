import { useEffect, useState } from "react";

const Prograssbar=({value})=>{
    const[range,SetRange]=useState(value)

    useEffect(()=>{
        SetRange(Math.min(100,Math.max(value,0)))
    },[value])
    return(
        <div className="progress-bar">
          <span style={{color:`${range>50?"white":"black"}`}}>{range.toFixed()}%</span>
          <div style={{"width":`${range/3.4}rem`}}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={range}
      
          >

          </div>
             
        </div>
    )
}
export default Prograssbar;