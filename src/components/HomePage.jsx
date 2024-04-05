import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Product from "./Product/Product";
import Footer from "./Footer/Footer";

const HomePage=()=> {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Product/>
    <Footer/>
    </>
  )
}

export default HomePage