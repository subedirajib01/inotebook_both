import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';

function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
}

  return (
    <>
    <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <div className='container'>
      <Routes>
        <Route path="/" element={
          <NoteState>
            <Home showAlert={showAlert} />
          </NoteState>
          } />
        <Route path="/about" element={
          <NoteState>
            <About />
          </NoteState>
          } />
        <Route path="/login" element={
          // <NoteState>
            <Login showAlert={showAlert}/>
          // </NoteState>
          } />
        <Route path="/signup" element={
          // <NoteState>
            <Signup showAlert={showAlert}/>
          // </NoteState>
          } />
      </Routes>
      </div>
        </Router>
    </>
  )
}



export default App;
