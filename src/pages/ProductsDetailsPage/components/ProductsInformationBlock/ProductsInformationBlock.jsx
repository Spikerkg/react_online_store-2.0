import { Box, Button, Typography } from "@mui/material";
import { calcPriceWithDiscount } from "../../../../utils/CalcPriceWithDiscount";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InputNumber from "rc-input-number";
import 'rc-input-number/assets/index.css';
import { useState } from "react";


const ProductInformationBlock = (props) => {
    const priceWithDiscount = calcPriceWithDiscount (
        props.product.price, props.product.discount
    );

    const [quantitiValue, setquantitiValue] = useState (props.product.quantiti === 0 ? 0 : 1);
    console.log (quantitiValue);


    return (
        <Box display="flex" flexDirection="column" gap="10px" width="50%">
            <Typography variant="h3" fontWeight="700">{props.product.title}</Typography>
            <Typography>{props.product.description}</Typography>
            <Box display="flex" gap="5px">
                <Typography sx={{textDecoration:'line-through'}} color="error" >{props.product.price} сом</Typography>
                <Typography> - {props.product.discount} %off =</Typography>
                <Typography fontWeight="700" color='success'>{priceWithDiscount} сом </Typography>
            </Box>
            <InputNumber
                value={quantitiValue} 
                step={1} 
                min={props.product.quantiti === 0 ? 0 : 1}
                max={props.product.quantiti}
                onChange={(value) => {
                    setquantitiValue(value);
                }} />
            <Button disabled={props.product.quantiti===0} variant="contained" endIcon={<AddShoppingCartIcon/>} color="success" > Add to cart</Button>
            
        </Box>
    );
};

export default ProductInformationBlock;