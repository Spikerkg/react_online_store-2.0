import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => localStorage.getItem("accessToken") || "");
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem("userEmail") || "");
  const [userId, setUserId] = useState(() => localStorage.getItem("userId") || "");
  const [authError, setAuthError] = useState("");

  const signUp = async ({ email, username, password }) => {
    try {
      const { data } = await axios.post(
        "https://owsch.pythonanywhere.com/api/auth/register/",
        { email, username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      setToken(data.accessToken);
      setUserEmail(email);
      setUserId(data.user?.id || "");
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userEmail", email);
      if (data.user?.id) localStorage.setItem("userId", data.user.id);

      setAuthError("");
      console.log("Регистрация успешна!");
      navigate("/");
    } catch (e) {
      if (e.response) {
        
        const msg = e.response.data.message || e.response.data.error || "Ошибка регистрации";
        setAuthError(msg);
      } else {
        setAuthError("Ошибка сети или сервера");
      }
    }
  };

  const signIn = async ({ email, password }) => {
    try {
      const { data } = await axios.post(
        "https://owsch.pythonanywhere.com/api/auth/login/",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      setToken(data.accessToken);
      setUserEmail(email);
      setUserId(data.user?.id || "");
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("userEmail", email);
      if (data.user?.id) localStorage.setItem("userId", JSON.stringify(data.user.id));

      setAuthError("");
      console.log("Вход выполнен успешно!");
      navigate("/"); 
    } catch (e) {
      if (e.response) {
        if (e.response.status === 404) {
          setAuthError("Пользователь с таким email не найден");
        } else {
          setAuthError(e.response.data.message || "Неверный email или пароль");
        }
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
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ token, userEmail, userId, authError, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
