import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/footer/Footer";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <div className="cont flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<p>Error 404</p>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
