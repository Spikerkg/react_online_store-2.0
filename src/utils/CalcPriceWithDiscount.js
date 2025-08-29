export const calcPriceWithDiscount = (oldPrice, discount) => {
    return oldPrice - (oldPrice * discount / 100); 
};
