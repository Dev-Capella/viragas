import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/AboutUs/About";
import Contact from "../pages/Contact/Contact";
import RootLayout from "../layouts/RootLayout";
import Products from "../pages/Product/Products";
import Referances from "../pages/Referances/Referances";
import Activities from "../pages/Activities/Activities";

function AppRoute() {
    return (
        <Routes>
            <Route>
                {/* Örnek tanımlama.*/}
                <Route path="" element={<RootLayout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/urunler" element={<Products />} />
                    <Route path="/iletisim" element={<Contact />} />
                    <Route path="/referanslar" element={<Referances />} />
                    <Route path="/faaliyetler" element={<Activities />} />
                </Route>
            </Route>
            {/* Örnek tanımlama. 
      <Route path="/register" element={<Register />} /> */}
        </Routes>
    );
}

export default AppRoute;
