import ArticleSection from "./ArticleSection/ArticleSection";
import HeroBanner from "./Herobanner/HeroBanner";
import ProductsSection from "./ProductsSections/ProductsSection";


const HomePage = () => {
    return (
        <div>
            <HeroBanner/>
            <ProductsSection/>
            <ArticleSection/>
        </div>
    )
};

export default HomePage;
