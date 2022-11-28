
import Sliader from '../../components/Home/Sliader'
import HomeCategory from '../../components/Home/HomeCategory'
import ProdactCardContiner from '../../components/Prodact/ProdactCardContiner'
import Dicount from '../../components/Home/Dicount'
import BrandFeatured from '../../components/Brand/BrandFeatured'


function HomePage() {
    return (
      <div className="font" >
        <Sliader/>
        <HomeCategory />
        <ProdactCardContiner title="الاكثرمبيعا" btntitle="المزيد" path="/ProductsShopePage" />
        <Dicount />
        <ProdactCardContiner title="الاكثر تقييما" btntitle="المزيد" path="/ProductsShopePage" />
        <BrandFeatured title="أشهر الماركات" btntitle="المزيد" />
      </div>
    );
  }
  
  export default HomePage;
