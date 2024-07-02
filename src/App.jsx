import { useState } from "react";
import Form from "./Form";
import { nanoid } from 'nanoid';
import Items from "./Items";
import {ToastContainer, toast} from 'react-toastify'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  console.log(list);
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
}

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false
    }
    const newItems = [...items, newItem];

    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Done! Task added to the list')
  }

  const removeItem = (itemId) => {
    const newItems = items.filter(itemFilter => itemFilter.id !== itemId);

    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item removed')
  }


  return <section className="section-center">
    <ToastContainer position="top-center" />
    <Form addItem={addItem} />
    <Items items={items} removeItem={removeItem} />
  </section>;
};

export default App;
