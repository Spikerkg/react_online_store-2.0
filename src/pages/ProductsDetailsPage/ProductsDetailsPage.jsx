import { Box, Container } from "@mui/material";
import ProductsImegesBlock from "./components/ProductsimageBlock/ProductsImegesBlock";
import ProductInformationBlock from "./components/ProductsInformationBlock/ProductsInformationBlock";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../../Context/productContext/ProductsContext";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const {currentProducts, getProduct } = useContext(ProductsContext);
    const params = useParams();
  

    useEffect (()=> {
    getProduct(Number(params.id)) 
    }, []);

    if (currentProducts === null) return <div>Загрузка...</div>


    return <Box sx={{padding:"50px"}}> 
        <Container>
            <Box display="flex" justifyContent="space-between" gap="30px">
            <ProductsImegesBlock product = { currentProducts} />
            <ProductInformationBlock product={ currentProducts}/>   
            </Box>
        </Container>
            </Box>
}

export default ProductDetailsPage;
