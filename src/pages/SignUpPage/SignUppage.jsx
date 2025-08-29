import { useState, useContext } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AuthContext } from "../../../Context/AuthContext/AuthContextProvider";


const SignUpPage = () => {
    const { signUp } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleClick = () => {
        if (!email || !username || !password || !confirmPassword) {
            setError("Все поля обязательны");
            return;
        }
        if (password !== confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }
        setError("");
        signUp({ email, username, password });
    };

    return (
        <Box padding="50px">
            <Typography variant="h2" textAlign="center" paddingBottom="20px">
        Sign Up
            </Typography>
            <Box display="flex" flexDirection="column" gap="20px" width="400px" margin="0 auto">
                <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <TextField label="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <TextField label="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                {error && <Typography color="red">{error}</Typography>}
                <Button variant="contained" onClick={handleClick}>Sign Up</Button>
            </Box>
        </Box>
    );
};

export default SignUpPage;
