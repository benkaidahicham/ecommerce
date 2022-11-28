import HomePage from './page/Home/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Utlity/Footer';
import NavebarPage from './components/Utlity/NavebarLogin'
import { LoginPage } from './page/Auth/LoginPage';
import { RegisterPage } from './page/Auth/RegisterPage';
import { AllCategoryPage } from './page/AllCategoryPage';
import { AllBrandPage } from './page/AllBrandPage';
import { ProductsShopePage } from './page/Products/ProductsShopePage';
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
