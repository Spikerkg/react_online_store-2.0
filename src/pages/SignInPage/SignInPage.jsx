import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContexProvider";


const SignInPage = () => {
    const { signIn } = useContext(AuthContext);

    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleClick = () => {
        if (emailValue.trim() === "") {
            setEmailError("Email обязательное поле");
            return;
        } else {
            setEmailError("");
        }

        if (passwordValue.trim() === "") {
            setPasswordError("Password обязательное поле");
            return;
        } else {
            setPasswordError("");
        }
        signIn({
            email: emailValue,
            password: passwordValue,
        });
    };

    return (
        <Box paddingTop="50px">
            <Container>
                <Typography
                    textAlign="center"
                    variant="h2"
                    fontWeight="700"
                    paddingBottom="20px"
                >
                    Sign In
                </Typography>
                <form>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="20px"
                        sx={{ width: "600px", margin: "0 auto" }}
                    >
                        <TextField
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                            label="Email"
                            type="email"
                            variant="outlined"
                            error={Boolean(emailError)}
                            helperText={emailError}
                        />
                        <TextField
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                            label="Password"
                            type="password"
                            variant="outlined"
                            error={Boolean(passwordError)}
                            helperText={passwordError}
                        />

                        <Button onClick={handleClick} variant="contained">
                            Login
                        </Button>
                    </Box>
                </form>
            </Container>
        </Box>
    );
};

export default SignInPage;
