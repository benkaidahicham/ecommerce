import HomePage from './pages/Home/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Utlity/Footer';
import NavebarPage from './components/Utlity/NavebarLogin'
import { LoginPage } from './pages/Auth/LoginPage';
import { RegisterPage } from './pages/Auth/RegisterPage';
import { AllCategoryPage } from './pages/AllCategoryPage';
import { AllBrandPage } from './pages/AllBrandPage';
import { ProductsShopePage } from './pages/Products/ProductsShopePage';
function App() {
  return (
    <div className="font text-center" >
      <NavebarPage/>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/AllCategoryPage' element={<AllCategoryPage/>}/>
        <Route path='/AllBrand' element={<AllBrandPage/>}/>    
        <Route path='/ProductsShopePage' element={<ProductsShopePage/>}/> 
        
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
