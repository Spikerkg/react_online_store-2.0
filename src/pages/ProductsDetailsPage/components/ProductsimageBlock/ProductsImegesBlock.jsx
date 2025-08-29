import { Box } from "@mui/material";

const ProductsImegesBlock = (props) => {
    return <Box width="50%">
        <img style={{maxWidth:"100%"}} src={props.product.image} alt={props.product.title} />
    </Box>; 
};


export default ProductsImegesBlock;
