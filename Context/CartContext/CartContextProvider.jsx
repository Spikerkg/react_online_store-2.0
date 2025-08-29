import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import axios from "axios";

const CartContextProvider = ({ children }) => {
    const [currentCart, setCurrentCart] = useState(null);

    const { token, userId } = useContext(AuthContext);

    const getCartByUserId = async () => {
        if (!token || !userId) {
            console.warn("Нет токена или userId");
            return;
        }

        try {
            const { data } = await axios.get(
                `https://owsch.pythonanywhere.com/api/orders/?user_id=${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCurrentCart(data);
        } catch (e) {
            console.error("Ошибка при получении корзины:", e);
        }
    };

    const addToCart = async (productId, quantity = 1) => {
        if (!token || !userId) {
            console.warn("Пользователь не авторизован");
            return;
        }

        try {
            const response = await axios.post(
                "https://owsch.pythonanywhere.com/api/cart/add/",
                {
                    user_id: userId,
                    product_id: productId,
                    quantity: quantity,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Товар добавлен в корзину:", response.data);

            
            await getCartByUserId();
        } catch (error) {
            console.error("Ошибка при добавлении товара:", error);
        }
    };

    
    useEffect(() => {
        if (token && userId) {
            getCartByUserId();
        }
    }, [token, userId]);

    return (
        <CartContext.Provider
            value={{
                currentCart,
                getCartByUserId,
                addToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
