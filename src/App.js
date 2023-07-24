// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Alerts from './Components/Alerts';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React ,{useState} from 'react';

import {BrowserRouter ,RouterProvider,Route,Routes,Link} from "react-router-dom";

function App() {
 const [mode,setMode]=useState("light");


 const [alert,setAlert]=useState(null);

 const showAlert =(message,type)=>{

  setAlert({
    msg:message,
    type:type
  })

 }


  const togglemode=()=>{
if(mode==="light"){
  setMode("dark");
  document.body.style.backgroundColor="#042743";
  showAlert("Dark Mode has been enabled","success");
  // document.title="TextUtils-Dark Mode"
}

else{
  setMode("light");
  document.body.style.backgroundColor="white";
  showAlert("Light Mode has been enabled","success");
  // document.title="TextUtils-Light Mode"
}
  }
  
  setTimeout(() => {
    setAlert(null);
   }, 3000);
   
  return (
    <>
       <BrowserRouter basename='/TextUtils'>
  <Navbar title="Textutils" aboutTitle="About" mode={mode} togglemode={togglemode}/>
<Alerts alert={alert}/>

<div className="container my-4">
          <Routes>
            <Route  path="/about"  element={<About mode={mode} />}>
            </Route>
            <Route path="/"element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter & many more"  mode={mode} />}>
            </Route>
          </Routes>
        </div>
        </BrowserRouter>
      </>
 
  );
}

export default App;
