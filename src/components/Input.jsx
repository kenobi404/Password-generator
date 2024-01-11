import React from 'react'

function Input({label,checked,handleChange}) {
  let text = '';
 switch(label){
  case 'upper' :
    text = "Include Uppercase Letters";
  break
  case 'lower':
    text = "Include Lowercase Letters";
  break
  case 'numbers' :
    text = "Include Numbers"
  break
  case 'specialChars':
    text = "Include Symbols"
  break
 }
  return (
    <div className='inputs'>
      <input type="checkbox" 
      checked={checked}
      id={label}
      onChange={() => handleChange(label)}/>
      <label htmlFor={label}>{text}
      </label>
    </div>
  )
}

export default Input