import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Componants/HomePage";
import Navbar from "./Componants/Navbar";
import { LoginPage } from "./Componants/LoginPage";
import { SignupPage } from "./Componants/SignupPage";
import PostsPage from "./Componants/PostsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/post" element={<PostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
