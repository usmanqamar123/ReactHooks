import React, { useContext } from 'react'
import {data,data1} from "./UseContextHook/UseContext"

const ChildC = () => {


    const FirstName = useContext(data);
    const LastName = useContext(data1);
  return (

    <>
       <p> My First Name is {FirstName} and last name is {LastName} </p>
    </>
    )
}

export default ChildC