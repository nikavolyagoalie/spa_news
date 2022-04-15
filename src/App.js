import React from "react";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import News from "./pages/News";
import Error404 from "./pages/Error404";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='news' element={<News/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
