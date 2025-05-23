import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {dummyProducts} from "../assets/assets.js";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
    const [user, setUser] = useState(true)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})

    const fetchProducts = async () => {
        setProducts(dummyProducts)
    }

    useEffect(() => {
        fetchProducts()
    }, []);


    const value = {navigate,user, setUser, isSeller, setIsSeller,showUserLogin, setShowUserLogin,products,currency}


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}
