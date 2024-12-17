import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [Name, setName] = useState('')
    const [Details, setDetails] = useState('')
    const [Image, setImage] = useState('')
    const [AllData, setAllData] = useState([])
    
    const handleSubmit = (e) => {
        const obj={
            name:Name,
            details:Details,
            image:Image
        }
        e.preventDefault()
        setName('')
        setDetails('')
        setImage('')
        setAllData([...AllData,obj])
    }
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <form onSubmit={(e)=>{
          handleSubmit(e)
          
        }} >
            <input
            value={Name}
            onChange={(e)=>{
                setName(e.target.value)
            }}
             type="text" placeholder='Enter your Name' />
            <input
            value={Details}
            onChange={(e)=>{
                setDetails(e.target.value)
            }}
             type="text" placeholder='Enter your Details' />
            <input
            value={Image}
            onChange={(e)=>{
                setImage(e.target.value)
            }}
            type="text" placeholder='Enter your IMAGEURL' />
        </form>
    </div>
  )
}

export default Form