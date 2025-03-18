import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Main } from "../components/main/Main";

export const AppRouter = () => {
  return (<BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Main/>}/>
    </Routes>
  </BrowserRouter>)
};
