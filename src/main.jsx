
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ProductsContextProvider from '../Context/productContext/ProductsContextProvider.jsx';
import ArticlesContextProvider from '../Context/ArticleContext/ArticleContextProvider.jsx';
import AuthContextProvider from '../Context/AuthContext/AuthContextProvider.jsx';
import CartContextProvider from '../Context/CartContext/CartContextProvider.jsx';



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthContextProvider>
            <CartContextProvider>
                <ArticlesContextProvider>
                    <ProductsContextProvider>
                        <App />
                    </ProductsContextProvider>
                </ArticlesContextProvider>
            </CartContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
);

