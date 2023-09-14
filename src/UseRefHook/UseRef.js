import React, { useRef, useState } from 'react'

const UseRef = () => {


    const refElement =useRef("")
    const [name,setname] = useState("Usman")

    console.log(refElement);

    function reset(){

        setname("")
        refElement.current.focus()

    }



    function change(){
        refElement.current.style.color="red";
        refElement.current.value="Qamar";
    }


  return (

    <>

    <input ref={refElement} type='text' value={name} onChange={(e)=>{setname(e.target.value)}}/>

    <button onClick={reset}>Reset</button>
    <button onClick={change}>Change</button>

    </>

  )
}

export default UseRef