import { Route, Routes } from "react-router-dom";
import HomePage from "../templates/HomePage";
import FoodPage from "../templates/FoodPage";
import Foodsall from "../templates/Foodsall";
import SugestFood from "../templates/SugestFood";
import Singup from "../templates/Singup";
import FrogetPassword from "../templates/FrogetPassword";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/foodsBest" element={<Foodsall />} />
        <Route path="/foods/:id" element={<FoodPage />} />
        <Route path="/SugestFood" element={<SugestFood />} />
        <Route path="/Singup" element={<Singup />} />
        <Route path="/FrogetPassword" element={<FrogetPassword />} />
      </Routes>
    </div>
  );
}

export default Router;
