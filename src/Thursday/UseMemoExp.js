import React,{useState,useMemo} from 'react'

function UseMemoExp() {
    const [number, setNumber] = useState([1,2,3,4,5,6]);
    const [a,setA] = useState(10);
    function max(){
        console.log("Max Function");
        return Math.max(...number);
    }

    const memoMax = useMemo(()=>max(),[number])

    const changeA = ()=>{
        console.log("State Change Function");
     setA(69);
    }
  return (
    <div>
      <h1>UseMemo Expample</h1>
      <h2>Value of A variable={a}</h2>
      <button onClick={changeA}>Change A state variable</button>
      <h2>Max Value</h2>
      {memoMax}
      <button onClick={()=>setNumber([122,145,158,201,131])}>Change Number State Variable</button>
    </div>
  )
}

export default UseMemoExp

// Over here if you will see that when we are updating the parent state variable value then also child component 
// is getting rendered that is because if you are just sending variables like props then that issue can be fixed by 
// using memo or by making child component as pure component

// but when you are sending function as a props then it falls under referential equality which means
//  functions value will always be treated as new so the child component will always be rerendered . 
// so to fix this we have to use useCallback hook . This hook memoize callback function. 
// After this the child component will not be rerendered if only the parent component state is changing. and 
// we can pass child component props value in dependency array that if the state value is changing in parent which 
// we are passing as props to child then we will render the child component.


// Now we are having anothr function findMax, everytime when you will do any state updation in parent component this 
// function will be called even when its input value is not changed. 

// so to fix this we have useMemo hook , it will memoize the calculation result of the function which we are
//  passing as a callback to useMemo , until unless the the result or the dependency variable value is not changed. 
// It will not be executed again.