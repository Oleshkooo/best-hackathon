import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";

import Navbar from "./assets/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        containerClassName="toaster"
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/transactions"} element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
