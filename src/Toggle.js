import React,{useState,useEffect} from 'react'
import './App.css'
import DarkModeToggle from "react-dark-mode-toggle";
function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  useEffect(()=>{
    const body=document.body;
    if(isDarkMode===true){
      body.classList.add('dark-mode')
    }
    else{
      body.classList.remove('dark-mode')
    }
  }, [isDarkMode])
  return (
    <>
     <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80} 
    />
    </>
  )
}

export default Toggle
