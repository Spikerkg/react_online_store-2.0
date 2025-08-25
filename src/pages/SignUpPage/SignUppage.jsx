import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const SignUpPage = () => {
    const { signUp } = useContext(AuthContext);

    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [emailRequiredEror, setemailRequiredEror] = useState("");
    const [passwordRequiredEror, setPasswordRequiredEror] = useState("");
    const [ConfirmpasswordRequiredEror, setConfirmPasswordRequiredEror] = useState("");

    const handleClick = () => {
        if (emailValue === "") {
            setemailRequiredEror("Emeil обязательная поле");
            return;
        } else {
            setemailRequiredEror("")
        }

        if (passwordValue === "") {
            setPasswordRequiredEror ("Password обязательная поле");
            return;
        } else {
            setPasswordRequiredEror("")
        }

        if (confirmPasswordValue === "") {
            setConfirmPasswordRequiredEror ("обязательное поле");
            return;
        } else {
             setConfirmPasswordRequiredEror("")
        }

        if (passwordValue !== confirmPasswordValue) {
            setConfirmPasswordError("Пароли не совпадают");
            return;
        } else {
            setConfirmPasswordError("")
            signUp({
                email: emailValue,
                password: passwordValue,
            });

        }
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
                            error={Boolean(emailRequiredEror)}
                            helperText={emailRequiredEror}
                        />
                        <TextField
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                            label="Password"
                            type="password"
                            variant="outlined"
                            error={Boolean(passwordRequiredEror)}
                            helperText={passwordRequiredEror}
                        />
                        <TextField
                            value={confirmPasswordValue}
                            onChange={(e) => setConfirmPasswordValue(e.target.value)}
                            label="Confirm password"
                            type="password"
                            variant="outlined"
                            error={Boolean(ConfirmpasswordRequiredEror) || Boolean(confirmPasswordError)}
                            helperText={ConfirmpasswordRequiredEror||confirmPasswordError}
                        />

                        <Button onClick={handleClick} variant="contained">
                            Save
                        </Button>
                    </Box>
                </form>
            </Container>
        </Box>
    );
};

export default SignUpPage;
