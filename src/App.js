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

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Alert message="Hello ! Ji kya haal chal " />
      <div className='container'>
      <Routes>
        <Route path="/" element={
          <NoteState>
            <Home />
          </NoteState>
          } />
        <Route path="/about" element={
          <NoteState>
            <About />
          </NoteState>
          } />
        <Route path="/login" element={
          // <NoteState>
            <Login />
          // </NoteState>
          } />
        <Route path="/signup" element={
          // <NoteState>
            <Signup />
          // </NoteState>
          } />
      </Routes>
      </div>
        </Router>
    </>
  )
}



export default App;
