import React,{useMemo, useState} from 'react'

const UseMemo = () => {


    const [add,setadd] = useState(0);
    const [sub, setsub] = useState(50);

   const mul = useMemo( function mul(){
    console.log("********")
    return add*10;
},[add])
  return (
    <>
    
    <button onClick={()=>(setadd(add+1))}>Add</button> {add}
    <br/>
    <button onClick={()=>(setsub(sub-1))}> Sub</button> {sub}
    <br/>

    <p>multiplication = {mul}</p>
    </>

    )
}

export default UseMemo