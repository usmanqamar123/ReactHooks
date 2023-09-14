import React, { useCallback, useState } from 'react'
import ChildA from "./ChildA"

const UseCallback = () => {

    const[counter , setcounter] = useState(0);
    const [add, setadd] = useState(0);
    const callback = useCallback(()=>{
        //
    }, [add])
  return (

    <>
        <ChildA  callback={callback}/>

        {counter} <br/>
        <button onClick={()=> setcounter(counter+1)}>Call</button> <br/>
        {add} <br/>
        <button onClick={()=>setadd(add+1)}>Add</button>
    
    </>
    )
}

export default UseCallback