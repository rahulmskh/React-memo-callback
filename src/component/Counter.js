import React from 'react'
import { useState,useMemo } from 'react';


function Counter() {
    const [countOne, setCountOne]= useState(0);
    const [countTwo, setCountTwo]= useState(0);
     
    function Increment(){
        setCountOne(countOne+1);
    }
    function Decrement(){
        setCountTwo(countTwo-1);
    }

    const isEven = useMemo(()=>{
        for(let i = 0; i < 1000000000; i++){}
        return countOne % 2 === 0;
        }, [countOne])
  return (
    <div>
        <button onClick={Increment}>Count One : {countOne}</button>
         {isEven?'Even':'Odd'} 
         <br></br>
        <button onClick={Decrement}>Count Two : {countTwo}</button>
    </div>
  )
}

export default Counter