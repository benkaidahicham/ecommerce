import React from 'react'
import { Container, Row } from 'react-bootstrap'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import BrandCard from '../../components/Brand/BrandCard'

export const AllBrand = () => {
  return (
    <Container >
    <div className='admin-content-text mt-2' > كل الماركات</div>

    <Row className="my-1 d-flex justify-content-between">
      <BrandCard img={brand1}/>
      <BrandCard img={brand2}/>
      <BrandCard img={brand3}/>
      <BrandCard img={brand1}/>
      <BrandCard img={brand2}/>
      <BrandCard img={brand3}/>
      <BrandCard img={brand1}/>
      <BrandCard img={brand2}/>
      <BrandCard img={brand3}/>
      <BrandCard img={brand1}/>
      <BrandCard img={brand2}/>
      <BrandCard img={brand3}/>
    </Row>
 </Container>
  )
}
