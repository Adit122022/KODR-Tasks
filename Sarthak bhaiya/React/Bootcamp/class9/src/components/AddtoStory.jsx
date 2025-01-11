import React, { useState } from 'react'

const AddtoStory = () => {
    const [profile, setprofile] = useState('')
    const [image, setImage] = useState('')
    const [story, setStory] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
    
    }
  return (
    <div >
        <form >
            <label>Profile Name:</label>
            <input type="text" value={profile} onChange={(e) => setprofile(e.target.value)} />
            <label>Image URL:</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>Add to Story</button>
        </form>
    </div>
  )
}

export default AddtoStory