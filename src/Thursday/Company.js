import React,{useCallback, useState}from 'react'
import Employee from './Employee'

function Company() {
    console.log("Company Component");
    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(20);

    const handleState =() =>{
      console.log("Clicked from Employee component");
    }
   const callBackHandleState = useCallback(()=> handleState(),[])
  return (
    <div>
    <h1>Company Component {num1}</h1>
    <button onClick={()=> setNum1(50)}>Change Num1</button>
    <Employee num={num2} handleFnc={callBackHandleState}/>
    <button onClick={()=> setNum2(150)}>Change Num2</button>

    </div>
  )
}

export default Company