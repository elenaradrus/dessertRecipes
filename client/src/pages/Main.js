import { Routes, Route } from "react-router-dom";
import Admin from "../components/Admin.js";
import AdminPanel from "../components/AdminPanel.js";
import Home from "../components/Home";
import Recipes from "../components/Recipes";


const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes/:id" element={<Recipes />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/adminpanel" element={<AdminPanel />} />
            </Routes>
        </div>
    );
}

export default Main;