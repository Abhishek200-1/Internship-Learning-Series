import {createContext, useEffect, useState} from 'react'
import { food_list } from '../assets/assets';
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState({});

    //logic to add items in cart
    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else
        {
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    //logic for remove cart 
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
    }

    //to get total amount
    const getCartTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    useEffect(() => {
        console.log(cartItems)
    },[cartItems])


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart, 
        removeFromCart,
        getCartTotalAmount,
    };

    

    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;