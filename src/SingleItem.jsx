import React, { useState } from 'react'

const SingleItem = ({itemsMap, removeItem}) => {
    const [isChecked, setChecked] = useState(false);

  return (
    <div className='single-item'>
        <input 
        type='checkbox'
        onChange={() => setChecked(!isChecked)} />
        <p style={{textDecoration:isChecked && 'line-through'}}>{itemsMap.name}</p>
        <button 
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(itemsMap.id)}>Remove</button>
    </div>
  )
}

export default SingleItem