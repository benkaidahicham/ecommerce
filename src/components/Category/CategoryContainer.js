import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import sale from "../../images/sale.png"
import prod1 from "../../images/prod1.png"
import pic from "../../images/pic.png"
import clothe from "../../images/clothe.png"
import cat2 from "../../images/cat2.png"
import mobile1 from "../../images/mobile1.png"



export const CategoryContainer = () => {
  return (
        <Container className='mb-5'>
          <div className='admin-content-text mt-2' > كل التصنيفات</div>
         <Row>
         <CategoryCard title="تخفيضات" img={sale} background="#f45f"/>
         <CategoryCard title="حواسيب " img={prod1} background="#f48f"/>
         <CategoryCard title="اواني الطبخ" img={pic} background="#f40f"/>
         <CategoryCard title="ملابس" img={clothe} background="#f50f"/>
         <CategoryCard title="تجميل" img={cat2} background="#f80f"/>
         <CategoryCard title="هواتف" img={mobile1} background="#f55f"/>
         <CategoryCard title="تخفيضات" img={sale} background="#f45f"/>
         <CategoryCard title="حواسيب " img={prod1} background="#f48f"/>
         <CategoryCard title="اواني الطبخ" img={pic} background="#f40f"/>
         <CategoryCard title="ملابس" img={clothe} background="#f50f"/>
         <CategoryCard title="تجميل" img={cat2} background="#f80f"/>
         <CategoryCard title="هواتف" img={mobile1} background="#f55f"/>
         <CategoryCard title="تخفيضات" img={sale} background="#f45f"/>
         <CategoryCard title="حواسيب " img={prod1} background="#f48f"/>
         <CategoryCard title="اواني الطبخ" img={pic} background="#f40f"/>
         <CategoryCard title="ملابس" img={clothe} background="#f50f"/>
         <CategoryCard title="تجميل" img={cat2} background="#f80f"/>
         <CategoryCard title="هواتف" img={mobile1} background="#f55f"/>
         </Row>
      </Container>
  )
}
