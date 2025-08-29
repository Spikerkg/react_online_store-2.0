import { Box, Container, Typography } from "@mui/material";
import ProductsList from "./components/ProductsList/ProductsList";


const ProductsSection = () => {
    return (
        <Box paddingTop="70px">
            <Container>
                <Typography display="flex" justifyContent="center" pb="30px" component="h2" variant="h2" fontWeight="700">
                  Cars
                </Typography>
                <ProductsList />
            </Container>
        </Box>
    );
};

export default ProductsSection;
