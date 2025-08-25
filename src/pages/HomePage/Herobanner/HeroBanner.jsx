import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import classes from "./HeroBanner.module.css"
import { Box, Button, Container, Typography } from "@mui/material";


const HeroBanner = () => {
    return (
        <Swiper 
        slidesPerView={1}
        spaceBetween={50}>
            <SwiperSlide>
                < div className={classes.slide} 
                style={{backgroundImage: "url('https://img2.wallspic.com/previews/0/8/1/4/34180/34180-mercedes_benz_sls_amg-performance_car-mercedes_benz_e_class-sports_car-supercar-x750.jpg')"}}>
                <Container>
                <Box paddingTop={15}>
                    <Typography component={"h2"}
                    alignItems={"flex-start"} 
                    fontWeight={700} variant="h2" 
                    sx={{ color:"#fff"}}
                    mb="20px">
                MERCEDES
                    </Typography>
                    <Typography component = "p" variant="p" 
                    sx={{ color:"#fff"}}
                    mb="30px">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero suscipit repellendus officia dolorem reiciendis, <br /> dolor ad. Itaque eaque, ducimus modi culpa pariatur enim dignissimos fuga, <br /> odio dolores quasi consectetur? Option.
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="success">Shop Now</Button>
                    </Box>
                    
                </Box>
                </Container>
                    </div></SwiperSlide>
            <SwiperSlide>
                <div className= {classes.slide} style={{backgroundImage: "url('https://images8.alphacoders.com/119/1198209.jpg'"}}>
                                <Container>
                <Box paddingTop={15}>
                    <Typography component={"h2"}
                    alignItems={"flex-start"} 
                    fontWeight={700} variant="h2" 
                    sx={{ color:"#fff"}}
                    mb="20px">
                AUDI
                    </Typography>
                    <Typography component = "p" variant="p" 
                    sx={{ color:"#fff"}}
                    mb="30px">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero suscipit repellendus officia dolorem reiciendis, <br /> dolor ad. Itaque eaque, ducimus modi culpa pariatur enim dignissimos fuga, <br /> odio dolores quasi consectetur? Option.
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="success">Shop Now</Button>
                    </Box>
                    
                </Box>
                </Container>
                </div></SwiperSlide>
            <SwiperSlide>
                <div className={classes.slide} style={{backgroundImage: "url('https://images.alphacoders.com/721/721009.jpg')"}}>
                                <Container>
                <Box paddingTop={15}>
                    <Typography component={"h2"}
                    display="flex"
                    
                    alignItems={"center"} 
                    fontWeight={700} variant="h2" 
                    sx={{ color:"#fff"}}
                    mb="20px">
                BMW
                    </Typography>
                    <Typography component = "p" variant="p" 
                    sx={{ color:"#fff"}}
                    mb="30px"
                    display="flex"
                    justifyContent="start">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero suscipit repellendus officia dolorem reiciendis, <br /> dolor ad. Itaque eaque, ducimus modi culpa pariatur enim dignissimos fuga, <br /> odio dolores quasi consectetur? Option.
                    </Typography>
                    <Box display="flex" justifyContent="start">
                        <Button variant="contained" color="success">Shop Now</Button>
                    </Box>
                    
                </Box>
                </Container>
                </div></SwiperSlide>
            <SwiperSlide>
                <div className={classes.slide} 
                style={{backgroundImage: "url('https://unpluggedperformance.com/wp-content/smush-webp/2023/08/Unplugged-Performance-Tesla-Model-S-APEX-Plaid-Carbon-Fiber-Aero-Suspension-Carbon-Ceramic-Brakes-BBK-Wheels-Image-5.jpg.webp')"}}>
                                <Container>
                <Box paddingTop={15}>
                    <Typography component={"h2"}
                    alignItems={"flex-start"} 
                    fontWeight={700} variant="h2" 
                    sx={{ color:"#fff"}}
                    mb="20px">
                TESLA
                    </Typography>
                    <Typography component = "p" variant="p" 
                    sx={{ color:"#fff"}}
                    mb="30px">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero suscipit repellendus officia dolorem reiciendis, <br /> dolor ad. Itaque eaque, ducimus modi culpa pariatur enim dignissimos fuga, <br /> odio dolores quasi consectetur? Option.
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="success">Shop Now</Button>
                    </Box>
                    
                </Box>
                </Container>
                </div></SwiperSlide>
        </Swiper>
    )
};

export default HeroBanner;
