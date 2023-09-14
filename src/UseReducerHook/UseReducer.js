import React,{useReducer} from 'react'

const UseReducer = () => {


    const initialstate=0;
   const reducer = (State,action)=>{
    switch(action){

       case "Increment":

       return State+1;

       case "Decrement":

       return State-1;

       default:
       return State;
    }

   }

    const[Currentstate,dispatch] = useReducer(reducer,initialstate)
  return (

    <>

    <div>Count = {Currentstate}</div>
    <button onClick={()=>dispatch("Increment")}>Increment</button>
    <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    
    </>
    )
}

export default UseReducer