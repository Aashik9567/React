import { useState } from "react";
import "./App.css"
import Aboutus from "./react_component/Aboutus";
import Navbar from './react_component/Navbar';
import Text_form from "./react_component/Text_form";
import Alert from "./react_component/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App(){
  const [mode,setmode]=useState('light')
  const [mode1,setmode1]=useState("light")
  const[alert,setalert]=useState(null)
  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 2000);
  }
  const togglemode1=()=>{
    if (mode==="orange"){
      showAlert("Light mode has been enabled","sucess");
      setmode('light')
      document.body.style.backgroundColor ='rgb(255, 255, 229)';
    }
    else{
      showAlert("Orange mode has been enabled","success");
      setmode('orange')
      document.body.style.backgroundColor ='#ff9248';
    }
  }
  const toggleMode=()=>{
    if (mode==="dark"){
      showAlert("Light mode has been enabled","sucess");
      setmode('light')
      document.body.style.backgroundColor ='rgb(157, 229, 229)';
      document.title="text formatter light mode"
    }
    else{
      showAlert("Dark mode has been enabled","success");
      setmode('dark')
      document.body.style.backgroundColor ='rgb(15, 29, 46)';
      document.title="text formatter dark mode"
    }

  }
  return (
    <>
    <Router>

    <Navbar title="Text utility" more="more about" mode={mode} mode1={mode1} togglemode={toggleMode} togglemode1={togglemode1}/>
    <Alert alert={alert}/> 
    <div className="container my-3" style={{fontWeight:"bold"}}>
      <Routes>
         <Route path="/about" element={<Aboutus/>}/>
         <Route path="/" element={<Text_form setalert={showAlert} mode={mode} mode1={mode1}/>
        }/>
      </Routes>
    </div>
    </Router>
    </>
  );
}
export default App