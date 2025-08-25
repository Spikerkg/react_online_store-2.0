import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductsCard = (props) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: "31%" }}>
      <CardMedia component="img" height="240" image={props.product.image} />
      <CardContent>
        <Box display="flex" flexDirection="column" gap="10px">
          <Typography variant="h5" component="h3">
            {props.product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#000" }}>
            {props.product.description}
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate(`/products/${props.product.id}`)}
          >
            View more
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductsCard;
