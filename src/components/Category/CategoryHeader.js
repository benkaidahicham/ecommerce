import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const CategoryHeader = () => {
  return (
    <div className='cat-header'>
    <Container>
        <Row>
            <Col className='d-flex justify-content-start py-2 flex-wrap'>
            <div className='cat-text-header'>الكل</div>
            <div className='cat-text-header'>الكترونيات</div>
            <div className='cat-text-header'>اواني منزلية</div>
            <div className='cat-text-header'>تخفيضات</div>
            <div className='cat-text-header'>الاكثر مبيعا</div>
            <div className='cat-text-header'>الاكثر تقييما</div>
            <div className='cat-text-header'>ملابس اطفال</div>
            <div className='cat-text-header'>ملابس نساء</div>
            <div className='cat-text-header'>ملابس رجال</div>
            <div className='cat-text-header'>المزيد</div>
            </Col>
        </Row>

    </Container>
    </div>
  )
}
