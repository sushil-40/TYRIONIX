import "./App.css";
// import { Button } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route index element={<Home />} />
      <Route path="about" element={<About />} /> */}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
