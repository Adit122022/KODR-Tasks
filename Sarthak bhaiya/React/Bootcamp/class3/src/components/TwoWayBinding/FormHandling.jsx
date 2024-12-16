import React, { useState } from 'react'

const FormHandling = () => {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [text,setText] = useState([]);
    const [file, setFile] = useState();
    const submitHandler = (e) =>{
        e.preventDefault();
        setText([...text,value])
           setValue('')
    }
 


  return (
    <div className=' flex h-screen justify-center items-center'>
        <form className=' w-1/2  flex items-center border-green-400 border p-5 justify-center' onSubmit={(e)=>{submitHandler(e)}} action="">
            <div className='w-1/2 h-full flex flex-col gap-5 ' >
            <input className='rounded-xl px-4 py-2 outline-none border border-green-400' placeholder='NAME.........' type="text" value={value}  onChange={(value)=>{setValue(value.target.value)}} />
            <input className='rounded-xl px-4 py-2 outline-none border border-green-400' placeholder='DESCRIPTION.........' type="text" value={value1}  onChange={(value1)=>{setValue1(value1.target.value)}} />
            <input type="file" onChange={(e)=>{setFile(URL.createObjectURL(e.target.files[0]));}} />
            <img src={file} />
          {text.map(function(value){
            return <p>{value}</p>
          })}
         
            <button className='bg-green-400 rounded-xl active:scale-95 hover:bg-green-300 text-white font-bold text-xl py-2'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormHandling