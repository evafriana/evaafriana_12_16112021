import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" exact element={<Dashboard />} />
        {/* It's gonna be Karl id by default */}
        <Route path="/" exact element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
