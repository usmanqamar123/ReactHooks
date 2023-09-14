import React, { createContext } from 'react'
import ChildA from "./ChildA";




const data = createContext();
 const data1 = createContext();

const UseContext = () => {


    

const FirstName= "Usman";
const LastName = "Qamar"

  return (

    <data.Provider value={FirstName}>

        <data1.Provider value={LastName}>
    <ChildA/>
        </data1.Provider>
        
    </data.Provider>

    )
}

export default UseContext
export {data,data1}