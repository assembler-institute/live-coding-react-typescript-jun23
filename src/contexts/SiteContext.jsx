import React, { useState, useEffect, createContext, useMemo } from "react";
import { useAuthContext } from "./authContext";

export const SiteContext = createContext()
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

function SiteContextProvider(props) {
    // Check if user is logged In
    const { isAuthenticated } = useAuthContext();

    useEffect(() => {
        if (!isAuthenticated) {
            setCart([]);
        }
    }, [isAuthenticated])



    // Get search focus value
    const [searchFocus, setSearchFocus] = useState(false);



    // Side bar shopping card open/close
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }


    // Products fetch
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const api = `${import.meta.env.VITE_SERVER_BASE_URL}/sofas`;
        await fetch(api)
            .then(response => response.json())
            .then(receivedData => setData(receivedData));
    }



    // Add to cart
    const [cart, setCart] = useState(cartFromLocalStorage)

    const addToCart = useMemo(() => {
        return (sofa) => {
            // check if sofa already in cart
            const sofaInCart = cart.find((sofaInCart) => sofaInCart.id === sofa.id);
            if (!sofaInCart) {
                setCart((prevCart) => [...prevCart, sofa]);
            } else {
                setCart((prevCart) =>
                    prevCart.map((sofaInCart) =>
                        sofaInCart.id === sofa.id ? { ...sofaInCart, count: sofaInCart.count + 1 } : sofaInCart
                    )
                );
            }
        };
    }, [cart, setCart]);



    // Remove from cart
    const removeFromCart = useMemo(() => {
        return (id) => {
            const sofaInCart = useMemo(() => { cart.find((sofa) => sofa.id === id) }, []);
            if (sofaInCart.count > 1) {
                setCart((prevCart) =>
                    prevCart.map((sofaInCart) =>
                        sofaInCart.id === id ? { ...sofaInCart, count: sofaInCart.count - 1 } : sofaInCart
                    )
                );
            } else {
                const sofaElse = useMemo(() => setCart((prevCart) => prevCart.filter((sofa) => sofa.id !== id)));
                return sofaElse;
            }
        };
    }, [cart, setCart]);


    const highCostFunction = number => {
        console.log('highCostFunction');
        for (let i = 0; i < 1000000000; i++) {
            number += 1;
        }
        return number;
    };

    // Add quantity to cart product
    const incrementItem = useMemo(() => {
        return (id) => {
            setCart((prevCart) =>
                prevCart.map((sofa) =>
                    sofa.id === id ? { ...sofa, count: sofa.count + 1 } : sofa
                )
            );
            highCostFunction(1)
        };
    }, []);



    // Calculate price
    const addition = (acc, currentValue) => {
        return acc + currentValue.count * currentValue.price
    }
    const totalPrice = cart.reduce(addition, 0)

    const [totalProduct, setTotalProduct] = useState(null)



    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
        setTotalProduct(() => document.querySelectorAll('section .sidebar-product').length);
    }, [cart])

    const value = { sidebar, cart, toggleSidebar, addToCart, removeFromCart, incrementItem, totalPrice, totalProduct, data, searchFocus, setSearchFocus }

    return (
        <SiteContext.Provider value={value}>
            {props.children}
        </SiteContext.Provider>
    )
}

export default SiteContextProvider;