import BottomHeader from "components/MainPage/bottomHeader/BottomHeader";
import AboutUs from "components/MainPage/aboutUs/AboutUs";
import Partners from "components/MainPage/partners/Partners";
import Product from "components/MainPage/product/Product";

const MainPage = () => {
    return (
        <>
            <BottomHeader />
            <Product titleUp={"Автотовары: аксессуары, "} titleCenter={"расходники и многое другое"} titleBottom={"PROAuto - это специализированный интернет магазин востребованных товаров для автомобилей. "} />
            <AboutUs />
            <Partners />


        </>
    )
}

export default MainPage;