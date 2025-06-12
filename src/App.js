import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "components/footer/Footer";
import MainPage from "pages/mainPage";
import Catalog from "pages/Catalog";
import Accumulate from "pages/accumulate";
import ServicePage from "pages/servicePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/catalog" element={<Catalog/>} />
        <Route path="/main/catalog/accumulate" element={< Accumulate/>} />
        <Route path="/main/service" element={<ServicePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
