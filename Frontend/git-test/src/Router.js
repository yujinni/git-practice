import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Login from "./pages/Login/Login";
import Login from "./pages/Login/Login";
import Login from "./pages/Login/Login";
import Login from "./pages/Login/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        //아아아아아아
      </Routes>
    </BrowserRouter>
  );
}
