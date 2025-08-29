import axios from "axios";
import { useState } from "react";
import { ProductsContext } from "./ProductsContext";

const ProductsContextProvider = (props) => {

    const [products, setProducts] = useState ([]);
    const [currentProducts, setCurrentProduct] = useState(null);

    const getProducts = async () => {
        try {
            const {data} = await axios.get ("https://owsch.pythonanywhere.com/api/products/");
            setProducts(data);
        } catch (e) {
            console.log (e);
        }
    };

    const getProduct = async (currentid) => {
        try {
            const {data} = await axios.get(`https://owsch.pythonanywhere.com/api/products/${currentid}`);
            setCurrentProduct (data);
        } catch(e){
            console.log(e);
        }
    };

    return <ProductsContext.Provider value={{
        products,
        getProducts,
        currentProducts,
        getProduct,

    }}>
        {props.children}
    </ProductsContext.Provider>;
};

export default ProductsContextProvider;