import {createContext, useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {books} from "../assets/data.jsx";

export const ShopContext = createContext()
const ShopContextProvider = (props) => {

    const currency = '$'
    const navigate = useNavigate()
    const [token, setToken] = useState('')
    const [cartItems, setCartItems] = useState({})
    const delivery_charges = 5

    // Adding items to the cart
    const addToCart = async (itemId) => {
        const cartData = {...cartItems}

        if(cartData[itemId]){
            cartData[itemId] +=1
        } else {
            cartData[itemId] = 1
        }
        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) { // Iterate over keys of cartItems
            try {
                if (cartItems[item] > 0) {
                    totalCount += cartItems[item];
                }
            } catch (error) {
                console.log(error);
            }
        }
        return totalCount;
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0) {
                let itemInfo = books.find((book) => book._id === item)
                if(itemInfo){
                    totalAmount += cartItems[item] * itemInfo.price
                }
            }
        }
        return totalAmount
    }

    const updateQuantity = async (itemId,quantity) => {
        const cartData = {...cartItems}
        cartData[itemId] = quantity
        setCartItems(cartData)
    }

    const contextValue = {books, navigate, currency, token, setToken, addToCart, cartItems, setCartItems, getCartCount, getCartAmount, updateQuantity, delivery_charges}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
