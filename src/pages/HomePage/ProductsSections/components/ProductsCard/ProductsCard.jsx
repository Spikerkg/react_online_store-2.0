import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box,
    Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../../../Context/CartContext/CartContext.js"; // путь проверь по структуре проекта

const ProductsCard = ({ product }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product.id, 1);
    };

    return (
        <Card sx={{ width: "31%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <CardMedia
                component="img"
                height="240"
                image={product.image}
                alt={product.title}
            />
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h5" component="h3">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#000" }}>
                        {product.description}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Цена: {product.price}₽
                    </Typography>
                    <Box display="flex" gap={2}>
                        <Button
                            variant="outlined"
                            onClick={() => navigate(`/products/${product.id}`)}
                        >
                            Подробнее
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleAddToCart}
                        >
                            Добавить в корзину
                        </Button>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ProductsCard;
