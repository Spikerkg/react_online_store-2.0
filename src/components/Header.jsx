import { AppBar, Box, Button, colors, Container, Toolbar, Typography } from "@mui/material";
import NoCrashOutlinedIcon from '@mui/icons-material/NoCrashOutlined';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

const navigate = useNavigate()

    return (
        <AppBar position="static"
                sx={{backgroundColor:"#1C1C1C"}}> 
            <Container maxWidth="lg">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                 <Toolbar disableGutters>
                     <NoCrashOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                      />
                      <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "end",
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cars  
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Link to="/" style={{
                color: "#fff",
                textDecoration: "none",
                marginRight: 10,
            }}> Home Page</Link>
            <Link to="/Products"style={{
                color: "#fff",
                textDecoration: "none",
                
            }}> Products Page</Link>
          </Box>
                </Toolbar>
                <Box display="flex" justifyContent="flex-end" alignItems="center">
                  <Button onClick={(()=> navigate("/sign-in"))} variant="text" sx={{color:"#ffffff"}}>SignIn</Button>/
                  <Button onClick={(()=> navigate("/sign-up"))} variant="text" sx={{color:"#ffffff"}}>SignUp</Button>
                </Box>
              </Box>
               
            </Container>
        </AppBar> 
    )
};

export default Header;