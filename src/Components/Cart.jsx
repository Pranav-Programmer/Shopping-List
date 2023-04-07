import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    backgroundColor: '#ffc0cb', 
    height: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  list:{
    textAlign: 'center', 
    margin: '0 0 1rem 0'
  },
  insideContainer:{
    backgroundColor: '#ffffff', 
    width: '30%', 
    minWidth:'17rem',
    padding: '0 2rem 0 2rem', 
    border: '2px dashed black', 
    marginBottom:'1rem', 
    overflowY: 'auto'
  },
  itemText:{
    textAlign: 'center', 
    marginBottom: '3rem'
  },
  itemForm:{
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  itemInput:{
    width: '50%', 
    minWidth:'8rem',
    borderBlockColor: '#000', 
    borderBlockWidth: '1px', 
    borderTopLeftRadius: '10px', 
    borderBottomLeftRadius: '10px', 
    fontSize: '1rem', 
    height: '2rem'
  },
  itemADD:{
    backgroundColor: '#0000ff', 
    color: 'white', 
    border: 'none', 
    borderTopRightRadius: '1rem', 
    borderBottomRightRadius: '1rem', 
    fontSize: '1rem', 
    width: '20%', 
    minWidth:'2rem' ,
    height: '2.35rem', 
    marginLeft: '-.5rem', 
    cursor: 'pointer'
  },
  ul:{
    marginTop: '2rem'
  },
  li:{
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    textAlign: 'justify', 
    wordWrap: 'break-word'
  },
  button:{
    backgroundColor: 'transparent', 
    border: 'none', 
    color: 'red', 
    cursor: 'pointer', 
    fontSize: '1.5rem', 
    fontWeight: 'bold'
  }
}));

function ShoppingList() {
  const classes = useStyles();
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingListItems')));

  useEffect(() => {
    const storedItems = localStorage.getItem('shoppingListItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const handleAddItem = (itemName) => {
    setItems([...items, itemName]);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items.slice(0, index), ...items.slice(index + 1)];
    setItems(newItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const itemName = event.target.elements.itemName.value;
    handleAddItem(itemName);
    event.target.reset();
  };

  useEffect(() => {
    localStorage.setItem('shoppingListItems', JSON.stringify(items));
  }, [items]);

  return (
    <div className={classes.container}>
      <h1 className={classes.list}>Shopping List</h1>
      <div className={classes.insideContainer}>
        <h1 className={classes.itemText}>Items To Buy</h1>
        <form className={classes.itemForm} onSubmit={handleSubmit}>
          <input className={classes.itemInput} type="text" name="itemName" placeholder="Add a new item" />
          <button className={classes.itemADD} type="submit">Add</button>
        </form>
        <ul className={classes.ul}>
          {items?.map((item, index) => (
            <li key={index} className={classes.li}>
              {item}
              <button className={classes.button} onClick={() => handleRemoveItem(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;
