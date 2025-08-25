import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "../pages/ProductsDetailsPage/ProductsDetailsPage";
import ArticlesDetailsPage from "../pages/HomePage/ArticlesDeteils/ArticlesDeteilsPage";
import SignUpPage from "../pages/SignUpPage/SignUppage";
import SignInPage from "../pages/SignInPage/SignInPage";

const MainRoutes = () => {
 return (
        <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<ProductDetailsPage/>}/>
        <Route path="/articles/:id" element={<ArticlesDetailsPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/sign-in" element={<SignInPage/>}/>
        </Routes>
    );
};
   

export default MainRoutes