import React from 'react';
import UseEffect from "./UseEffectHook/UseEffect";
// import ChildC from "./UseContextHook/ChildC";
// import UseContext from "./UseContextHook/UseContext";
import UseReducer from "./UseReducerHook/UseReducer";
import UseMemo from "./UseMemoHook/UseMemo";
import UseRef from "./UseRefHook/UseRef";
import UseCallback from "./UseCallbackHook/UseCallback";
import {Route,Routes} from "react-router-dom";



function App() {






  return (
    <div className="App">


      <p >useState and useEffect Implementation</p>
      <UseEffect />

      <p>useContext Implementation</p> <br/>

      {/* <UseContext/> */}

      {/* <ChildC/> */}

      <p>UseReducer Hook implementation</p>  <br/>


      <UseReducer />


      <p>UseMemo Hook Implementation</p>  <br/>

      <UseMemo />

      <p>UseRef Implementation</p> <br/>

      <UseRef/>

      <p>Use CAll Back Hook Implementation</p> <br/>

      <UseCallback/>

      <p>React - Router - Dom implementation</p> <br/>


      <Routes>

        <Route path="/" element={<div>My Home Page</div>}/>
        <Route path="/About" element={<div>My About Page</div>}/>
        <Route path="/Contact" element={<div>My Contact Page</div>}/>




      </Routes>

    </div>


  );
}

export default App;
