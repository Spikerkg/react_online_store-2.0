import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();

    const [token, setToken] = useState(() => localStorage.getItem("accessToken") || "");
    const [userEmail, setUserEmail] = useState(() => localStorage.getItem("userEmail") || "");
    const [userId, setUserId] = useState(() => localStorage.getItem("userId") || "");
    const [authError, setAuthError] = useState("");

    const signIn = async ({ email, password }) => {
        try {
            const { data } = await axios.post(
                "https://owsch.pythonanywhere.com/api/auth/login/",
                { email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            console.log("Вход выполнен.", data);
            
            const decoded = jwtDecode(data.access);
            console.log(decoded.user_id);
            const idFromToken = decoded.user_id;

            setToken(data.access);
            setUserEmail(email);
            setUserId(idFromToken);

            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("refreshToken", data.refresh);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userId", idFromToken);

            setAuthError("");
            navigate("/");
        } catch (e) {
            if (e.response) {
                setAuthError(
                    e.response.data.message ||
          e.response.data.error ||
          "Неверный email или пароль"
                );
            } else {
                setAuthError("Ошибка сети или сервера");
            }
        }
    };

    const signUp = async ({ email, username, password }) => {
        try {
            const { data } = await axios.post(
                "https://owsch.pythonanywhere.com/api/auth/register/",
                { email, username, password },
                { headers: { "Content-Type": "application/json" } }
            );

            console.log("Регистрация успешна.", data);

            await signIn({ email, password });
        } catch (e) {
            if (e.response) {
                const msg = e.response.data.message || e.response.data.error || "Ошибка регистрации";
                setAuthError(msg);
            } else {
                setAuthError("Ошибка сети или сервера");
            }
        }
    };

    const signOut = () => {
        setToken("");
        setUserEmail("");
        setUserId("");
        setAuthError("");

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userId");
    };

    const refreshAccessToken = async () => {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) return;

        try {
            const { data } = await axios.post(
                "https://owsch.pythonanywhere.com/api/auth/token/refresh/",
                { refresh },
                { headers: { "Content-Type": "application/json" } }
            );
            console.log("Access токен обновлён:", data.access);
            setToken(data.access);
            localStorage.setItem("accessToken", data.access);
        } catch (e) {
            console.warn("Не удалось обновить токен.",e);
            signOut();
        }
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            refreshAccessToken();
        }, 4 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                token,
                userEmail,
                userId,
                authError,
                signUp,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
