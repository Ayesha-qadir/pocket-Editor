//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

 const [mode, setMode]= useState('light');
 const [alert, setAlert]=useState(null);
 const showAlert =(message, type)=>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
 }
 const toggleMode = ()=>{

  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ="#042743";
    document.body.style.color ="white";
    showAlert('Dark mode has been enables', 'success')

 }else{
  setMode('light');
  document.body.style.backgroundColor ="white";
  document.body.style.color ="black";
  showAlert('Light mode has been enables', 'success')

 }
}
  return (
   <>
   
 <BrowserRouter>
 <Navbar  title="Pocket Editor" about= "About" mode={mode} toggleMode={toggleMode} />
  <Alert alert= {alert}/>
  <div className='container my-4' mode={mode}>
 <Routes>

          <Route path="/About" element={<About/>}> </Route>
          <Route path="/" element={<Form heading=" Change your text into Uppercase Capitilize &  Remove spaces "/>}>
            
          </Route>
          </Routes>
          </div>
</BrowserRouter>
 
   </>
  );
}

export default App;
