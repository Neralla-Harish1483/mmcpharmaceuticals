import { Routes,Route} from "react-router-dom"
import Products from "../header/subHeader/products"
import Categories from "../header/subHeader/categories"
import Home from "../pages"
import Gallery from "../header/subHeader/gallery"
import Explore from "../header/subHeader/Explore"
import Partners from "../header/subHeader/partners"
import Career from "../header/subHeader/career"
import ProductRedirect from "../header/subHeader/products/productRedirect"
import ContactUs from "../header/navBar/Contact"
import Team from "../header/navBar/Team"
import AboutUs from "../header/navBar/aboutUs"

export default function CustomRoutes(){
    return(
    <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductRedirect/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path= "/contactus" element={<ContactUs/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/about" element={<AboutUs/>}/>
    </Routes>
    </>
    )
}