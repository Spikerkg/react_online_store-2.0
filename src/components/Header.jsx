import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import NoCrashOutlinedIcon from '@mui/icons-material/NoCrashOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContexProvider";


const Header = () => {
  const navigate = useNavigate();
  const { userEmail, signOut } = useContext(AuthContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1C1C1C" }}> 
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Toolbar disableGutters>
            <NoCrashOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home Page</Link>
              <Link to="/Products" style={{ color: "#fff", textDecoration: "none" }}>Products Page</Link>
            </Box>
          </Toolbar>

          <Box display="flex" alignItems="center" gap={2}>
            {userEmail ? (
              <>
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  {userEmail}
                </Typography>
                <Button onClick={signOut} variant="text" sx={{ color: "#fff" }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => navigate("/sign-in")} variant="text" sx={{ color: "#fff" }}>
                  SignIn
                </Button>
                <Button onClick={() => navigate("/sign-up")} variant="text" sx={{ color: "#fff" }}>
                  SignUp
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </AppBar> 
  );
};

export default Header;
