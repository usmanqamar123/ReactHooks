import React,{useState,useEffect} from 'react'

const UseEffect = () => {


        const [counter , setcounter] = useState(0);
        const [data,setdata] = useState("Usman")
        

        useEffect(()=>{

        console.log("Use Effect")
      }, [data]);



      function updatecounter(){

        setcounter(counter+1);
      }

      function updatedata(){
        setdata("Qamar")
  
    }

    
  return (
    <>

<p>Button is clicked {counter} times</p>

<button onClick={updatecounter}>Click Me!</button>
    <button onClick={updatedata}>Update Data</button>

    </>

  )
}

export default UseEffect