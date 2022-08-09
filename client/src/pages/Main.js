import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";


const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes/:id" element={<Recipes />} />
            </Routes>
        </div>
    );
}

export default Main;