import { useEffect, useState } from "react";
import React from "react";
const Counter = ({ end, duration = 4000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() =>{
    let start = 0;
    const increase = end / (duration / 16);
    const timer = setInterval(() =>{
        start += increase;
        if(start >= end){
            setCount(end);
            clearInterval(timer);
        }else{
            setCount(Math.floor(start));
        }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count}</span>;
};

export default Counter;
