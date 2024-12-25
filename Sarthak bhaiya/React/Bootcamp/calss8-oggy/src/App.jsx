import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotste, setrotste] = useState(0)

  const imgref = useRef(null)
 
  useEffect(() => {
   
      imgref.current.style.transform = `rotate(${rotste}deg)`
      imgref.current.style.top = `${y}%`
      imgref.current.style.left = `${x}%`
      imgref.current.style.position = 'absolute'
    
  }, [x, y, rotste])
  
  return (
    <div className='box'>
      <img ref={imgref} src="https://wallpapers.com/images/hd/hinata-hyuga-anime-character-nbb6fl80asp2uyn4.png" alt="" />
      <button onClick={()=>{
        setX(Math.random() * 90);
        setY(Math.random() * 90);
        setrotste(Math.random() * 360);
      }}> click here</button>
      
    </div>
  )
}

export default App