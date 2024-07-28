import { useState } from "react";

const ShoppingCart = () => {

    const [cart, setCart] = useState([]);
    const [item, setItem] = useState('');
  
    const addItem = () => {
      if (item.trim() !== '') {
        setCart([...cart, item]);
        setItem('');
      }
    };
  
    const removeItem = (index) => {
      setCart(cart.filter((_, i) => i !== index));
    };

  return (
    <>
     <div className="container mx-auto p-4 max-w-md  mt-24">
     <div className="card bg-base-100 w-96 shadow-xl">
     <div className="card-body">
     <h1 className="card-title">Shopping Cart</h1>
     <input 
          type="text" 
          className="input input-bordered w-full max-w-xs"
          value={item} 
          onChange={(e) => setItem(e.target.value)} 
          placeholder="Enter item" 
        />
    <button onClick={addItem} className='btn btn-outline btn-accent'>Add Item</button>

    <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            {item}
            <button className='btn btn-outline btn-error' onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

     </div>
     </div>
     </div>
    </>
  )
}

export default ShoppingCart