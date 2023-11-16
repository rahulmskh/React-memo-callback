
// import React,{ useState } from 'react';
import './App.css';
import Company from './Thursday/Company';
import UseMemoExp from './Thursday/UseMemoExp';
// import Test from './component/Test';
// import Counter from './component/Counter';

function App() {
  // const[count,setCount] = useState(0);
  // const[data,setData] = useState(1);
  // function increament(){
  //   setData(2);
  //   setCount(count+1);
  // }
  return (
    <div className="App">
    App Component
    <UseMemoExp/>
    {/* <Company/> */}
    {/* <Counter/> */}
    {/* <Test data={data}/>
    <button onClick={()=>increament()}>+{count} Count</button> */}
    </div>
  );
}

export default App;
