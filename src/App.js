import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },1000)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark Mode has been Enabled" , "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been Enabled" , "success");
    }
  }


  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3' >
        <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter The Text to analyze " mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
