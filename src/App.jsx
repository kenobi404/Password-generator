import { useEffect, useState } from 'react'
import Strength from './components/Strength';
import { checkPasswordStrength } from './checkPasswordStrength'
import Input from './components/Input';

import './App.css'

function App() {
  const [password,setPassword] = useState('')
  const [len,setLen] = useState(8);
  const [controls,setControls] = useState({
    upper: false, 
    lower: true, 
    numbers: true, 
    specialChars: false,
  })
  const [isCopied, setIsCopied] = useState(false);
  const[strength,setStrength] = useState(null);

  const inputs = ['upper' ,'lower' , 'numbers' ,'specialChars'];
 
  useEffect(()=>{
    generatePassword();

  },[])

  const generatePassword = () => {

    if(controls.upper || controls.lower || controls.numbers || controls.specialChars){
      let passwordGenerated = '';
      let wholeString = ''
      if(controls.upper) wholeString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      if(controls.lower) wholeString += 'abcdefghijklmnopqrstuvwxyz'
      if(controls.numbers) wholeString += '0123456789'
      if(controls.specialChars) wholeString += '!@#$%^&*()-_=+[]{}|;:,.<>?/'


      for(let i=0;i<len;i++){
        passwordGenerated += wholeString[Math.floor(Math.random() * wholeString.length)]
      }
      const result = checkPasswordStrength(passwordGenerated);
      setStrength(result)
      
      setPassword(passwordGenerated)
    }
     
  }


  const handleClick = async() => {
    setIsCopied(true);
    await navigator.clipboard.writeText(password)
    setTimeout(displayCopiedLabel, 1000);
  }

  const displayCopiedLabel = () => {
    setIsCopied(false);
  }



  const handleChange = (label) => {
    setControls(prev => ({
      ...prev,
      [label]: !controls[label],
    }))
  }

  return (
    <>
     <main>
        <h3>Password Generator</h3>
        <div className="password_field">
          <div className="password" >{password}</div>
          
          <div className="copy"  onClick={handleClick}> 
          <span className={`${isCopied ? "show" : "hidden"}`} id='copied-label'>COPIED</span>
          <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="#A4FFAF"
          /></svg>
          </div>
        
        </div>

        <div className="controls">
          <div className="len">
            <span>Character Length</span>
            <span>{len}</span>
          </div>
          <input className='slider'
            type="range" 
            min={2} 
            max={20} 
            value={len}
            onChange={(e) => setLen(e.target.value)}
          />


          {
            inputs.map(input => <Input 
            checked={controls[input]} 
            handleChange={handleChange} 
            label={input}
            key={input}/>
            )
          }


        
          <div className="strength_wrapper">
            <p>STRENGTH</p>
            <div className="strength">
              <Strength strength={strength}/>
            </div>
          </div>
        <button onClick={generatePassword}>GENERATE</button>
        </div>

    
     </main>
    </>
  )
}

export default App
