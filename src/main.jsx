
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductsContextProvider from '../Context/productContext/ProductsContextProvider.jsx';
import ArticlesContextProvider from '../Context/ArticleContext/ArticleContextProvider.jsx';
import AuthContextProvider from '../Context/AuthContext/AuthContexProvider.jsx';



createRoot(document.getElementById('root')).render(
    <BrowserRouter>
  <AuthContextProvider>
    <ArticlesContextProvider>
      <ProductsContextProvider>
          <App />
      </ProductsContextProvider>
    </ArticlesContextProvider>
  </AuthContextProvider>
</BrowserRouter>
);

