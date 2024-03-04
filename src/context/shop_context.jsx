/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import { ImageGalleryData } from '../data/StorePageData'

export const ShopContext = createContext(null);

const getDefaultItem = () => {
    let item = {};
    for (let i = 1; i < ImageGalleryData.length + 1; i++) {
        item[i] = 0;
    }
    return item;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultItem());
    const [cartAmount, setCartAmount] = useState(1)
    const [cartToggle, setCartToggle] = useState(false);

    const ToggleCart = () => {
        cartToggle ? setCartToggle(false): setCartToggle(true);
        document.body.classList.toggle("ScrollLock")
        setCartAmount(1)
    };

    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + cartAmount}))
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1}))
    };

    const deleteItem = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: 0}))
    };
    
    const contextValue = { 
        cartItems, cartAmount, setCartAmount, addToCart, removeFromCart, deleteItem,
        cartToggle, setCartToggle, ToggleCart
    }
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
