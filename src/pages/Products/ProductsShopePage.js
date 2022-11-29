import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CategoryHeader } from '../../components/Category/CategoryHeader'
import ProdactCardContiner from '../../components/Prodact/ProdactCardContiner'
import Paagination from '../../components/Utlity/Paagination'
import { SearchCountResult } from '../../components/Utlity/SearchCountResult'
import { SiadFilter } from '../../components/Utlity/SiadFilter'

export const ProductsShopePage = () => {
  return (
    <div style={{minHeight:'500px'}}>
    <CategoryHeader/>
    <Container>
    <SearchCountResult title="400  نتيجة بحث "/>
    <Row className='d-flex flex-row'>
      <Col className='d-flex' sm='2' xs='2' md='1'>
         <SiadFilter />
      </Col>
      <Col className='d-flex' sm='10' xs='10' md='11'>
        <ProdactCardContiner title='' btntitle=''/>
      </Col>
    </Row>
    </Container>
    <Paagination/>
    </div>
  )
}
