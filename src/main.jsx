
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductsContextProvider from '../Context/productContext/ProductsContextProvider.jsx';
import ArticlesContextProvider from '../Context/ArticleContext/ArticleContextProvider.jsx';
import AuthContextProvider from '../Context/AuthContext/AuthContexProvider.jsx';



createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ArticlesContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsContextProvider>
    </ArticlesContextProvider>
  </AuthContextProvider>

);

