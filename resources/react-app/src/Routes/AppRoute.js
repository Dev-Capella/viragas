import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/AboutUs/About";
import Contact from "../pages/Contact/Contact";
import RootLayout from "../layouts/RootLayout";
import Products from "../pages/Product/Products";
import Referances from "../pages/Referances/Referances";
import Activities from "../pages/Activities/Activities";
import News from "../pages/News/News";
import NewsDetail from "../pages/News/NewsDetail";
import Catalog from "../pages/Catalog/Catalog";
import OurDealers from "../pages/OurDealers/OurDealers";
import Loading from "../components/Loading/Loading";

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
                    {/* Haberler */}
                    <Route path="/haberler" element={<News />} />
                    <Route path="/haberler/:slug" element={<NewsDetail />} />
                    <Route path="/katalog" element={<Catalog />} />
                    <Route path="/bayilerimiz" element={<OurDealers />} />
                    <Route path="/loading" element={<Loading />} />
                </Route>
            </Route>
            {/* Örnek tanımlama. 
      <Route path="/register" element={<Register />} /> */}
        </Routes>
    );
}

export default AppRoute;
