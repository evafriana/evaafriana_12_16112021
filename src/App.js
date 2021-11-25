import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" exact element={<Home />} />
        {/* the default route */}
        <Route
          exact
          path="/"
          render={() => <Navigate to="/12" element={<Home />} />}
        />
        {/* <Route element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
