import { useState,useEffect } from "react";

function Counter(){

    const[count,setCount]=useState(0);

    useEffect(
        ()=>{setTimeout(()=>{
            setCount((count)=>count+1);
        },2000)
    },[]
    );
    
    return(
        <h1>The Count is {count}</h1>
    );
}

export default Counter;