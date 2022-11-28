import { Container, Row } from "react-bootstrap";
import Subtitle from "../Utlity/Subtitle"
import BrandCard from './BrandCard'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'

function BrandFeatured({title,btntitle}) {
    return (
     <Container >
        <Subtitle title={title} btntitle={btntitle} path="/AllBrand"/>
        <Row className="my-1 d-flex justify-content-between">
          <BrandCard img={brand1}/>
          <BrandCard img={brand2}/>
          <BrandCard img={brand3}/>
          <BrandCard img={brand1}/>
          <BrandCard img={brand2}/>
          <BrandCard img={brand3}/>
        </Row>
     </Container>
    );
  }
  
  export default BrandFeatured;