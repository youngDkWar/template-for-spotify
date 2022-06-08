import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import { Navigate } from "react-router-dom";

/**
 * Это страница авторизации, чтобы можно было загрузить данные пользователя.
 * Функция получает токен доступа и сохраняет его в локальное хранилище. Если авторизация провалена,
 * пользоватлеь возвращается обратно на страницу авторизации. Так же устанавливается время входа, токен
 * будет доступен по умолчанию один час, после этого необходимо заново авторизоваться.
 * 
 */
function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    let token = window.localStorage.getItem("token");
    if (!token) { 
      const hash = getTokenFromUrl(); 
      token = hash.access_token;
      window.location.hash = "";
      localStorage.setItem("timeStart", String(Date.now() / 1000));
    }
    if (token) {
      setToken(token);
      localStorage.setItem("token", token);
    }
  }, []);
  return <div className="app">{token ? <Navigate to="/" /> : <Login />}</div>;
}

export default App;
