import Product from "components/MainPage/product/Product";
import PathRouter from "components/pathRouter/pathComponent";


const Catalog = () => {
    return (
        <>
            <PathRouter />
            <Product titleCenter={'КАТАЛОГ'} titleBottom={'Мы предлагаем лучшие цены на продукцию!'} />
        </>
    );
}

export default Catalog;