import React, { useState } from 'react'
import './addNew.css'

function AddNew() {

  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  }
  const cancelEdit = () => {
    setPressed(!pressed);
  }

  return (
    <div>
      {pressed ? ( <div className='wordItem'>
        <input className='word_input' type="text" />
        <input className='word_input' type="text" />
        <input className='word_input' type="text" />
        <input className='word_input' type="text" />
        <button className='button save'></button>
        <button className='button cancel' onClick={cancelEdit}></button>
    </div>) : (<div className='button new' onClick={handleChange}></div>
      )}
    </div>
  )
}

export default AddNew