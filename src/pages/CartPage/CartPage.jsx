import { useEffect } from "react";
import { CartContext } from "../../../Context/CartContext/CartContext";

const CartPage = () => {
    const { getCartByUserId, currentCart } = CartContext;

    useEffect(() => {
        getCartByUserId();
    }, []);

    if(!currentCart) return null;


    return <div>
        Cart Page
    </div>;
};

export default CartPage;