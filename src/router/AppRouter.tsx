import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/login/Login";

export const AppRouter = () => {
  return (<BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>)
};
