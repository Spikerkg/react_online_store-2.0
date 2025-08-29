import { useContext, useEffect } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";

import { Box } from "@mui/material";
import { ProductsContext } from "../../../../../../Context/productContext/ProductsContext";

const ProductsList = () => {
    const { products, getProducts } = useContext(ProductsContext);
    console.log (products);


    useEffect(() => {
        getProducts();
    }, []);


    return (
        <Box display="flex" flexWrap="wrap" gap="20px">
            {products.map((product) => {
                return <ProductsCard key={product.id} product={product} />;
            })}
        </Box>
    );
};

export default ProductsList;
