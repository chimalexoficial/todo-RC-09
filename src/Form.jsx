import { useState } from "react"
import {nanoid} from 'nanoid';
import {toast} from 'react-toastify'


const Form = ({addItem}) => {
  const [newItemName, setNewItemName] = useState('');

  const handleNewItem = (e) => {
    setNewItemName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItemName) {
      toast.error('Please write some task');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>To-do list</h4>
      <div className="form-control">
        <input 
        type="text"
        className="form-input" 
        name="" 
        id=""
        value={newItemName}
        onChange={(e) => handleNewItem(e)} />
        <button 
        type="submit" 
        className="btn"
        >Add item</button>
      </div>
    </form>
  )
}

export default Form