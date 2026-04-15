import React from 'react'
import {useState  } from "react";
const Oprations= () => {
   
   const[num1,setNum1] =useState('');
   const[num2,setNum2] =useState('');
   const[result,setResult] =useState(0);

    function AddSum() {
       const n1=parseFloat (num1)||0;
       const n2=parseFloat (num2)||0;
       
        return(
             setResult(n1+n2)
        )

    }
    function SubtractNum() {
        const n1=parseFloat (num1)||0;
        const n2=parseFloat (num2)||0;
        return(
             setResult(n1-n2)
        )       
    }
   function multNum() {
    const n1=parseFloat (num1)||0;
    const n2=parseFloat (num2)||0;
    return(
         setResult(n1*n2)
    )
   }
   function DivNum() {
    const n1=parseFloat (num1)||0;
    const n2=parseFloat (num2)||0;
    return(
         setResult(n1/n2)
    )
   }
  return (
    <div>
      <input type='number' value={num1} onChange={(e)=>setNum1(e.target.value)}/>
      <input type='number' value={num2} onChange={(e)=>setNum2(e.target.value)}/>
      <button onClick={AddSum}>+</button>
      <button onClick={SubtractNum}>-</button>
      <button onClick={multNum}>*</button>  
      <button onClick={DivNum}>/</button>
      <h3 >{result}</h3>

    </div>
  )
}



export default Oprations
