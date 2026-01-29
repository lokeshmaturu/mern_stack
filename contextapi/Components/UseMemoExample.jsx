import React,{useState,useMemo} from "react";
function UseMemoExample(){
    const[count,setCount]=useState(0);
    const[other,setOther]=useState(0);
    const expensiveValue=useMemo(()=>{
        console.log("Calculating...");
        return count*2;
    },[count]);
    return(
        <div>
            <h2>useMemo Example</h2>
            <p>Count: {count}</p>
            <p>Other: {other}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setOther(other + 1)}>Increment Other</button>
        </div>
    )
}
export default UseMemoExample;