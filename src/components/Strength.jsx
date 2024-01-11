import React from 'react'

function Strength({strength}) {
  const fills = [0,0,0,0];
  let color = '';
  let message = ''
  if(strength<=1) {
    message = 'Too weak';
    fills[0] = 1;
    color = 'red'

  }
  else if(strength<=2) {
    message = 'Weak';
    fills[0] = fills[1] = 1;
    color = 'red'
    
  }
  else if(strength<=4) {
    message = 'Medium';
    fills[0] = fills[1] = fills[2] = 1;
    color = 'yellow';
  }
  else {
    message = 'Strong';
    fills[0] = fills[1] = fills[2] = fills[3] = 1;
    color = 'green';
  }

  console.log(fills)
 
  
  return (
    <>
      <p>{message}</p>
      <div className="container">
        {fills.map(isFill => <div key={Math.floor(Math.random()*10000)}
          className={isFill?`fill ${color}`:'empty'}></div>)}
      </div>
      </>
    
  )
}

export default Strength;