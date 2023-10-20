import { Routes, Route } from "react-router-dom";
import Home from "./Home Page/Home";
import Login from "./Login Page/Login";
import Signup from "./Signup Page/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
