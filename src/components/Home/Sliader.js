import Carousel from 'react-bootstrap/Carousel';
import slider4 from '../../images/slider4.png'
import slider1 from '../../images/slider1.png'


function Sliader() {
  return (
    <Carousel>
      <Carousel.Item className='slider-background' interval={2000}>
        <div className='d-flex flex-row justify-content-center aling-items-center'>
        <img 
          style={{height:"296px",width:"313.53px"}}
          className=""
          src={slider4}
          alt="First slide"
        />
        <div className=''>
          <h3 className='slider-title'>هناك خصم كبير</h3>
          <p className='slider-text'>خصم يصل 50% عند شرائك.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-background2' interval={2000}>
        <div className='d-flex flex-row justify-content-center aling-items-center'>
        <img 
          style={{height:"296px",width:"313.53px"}}
          className=""
          src={slider1}
          alt="First slide"
        />
        <div className=''>
          <h3 className='slider-title'>هناك خصم كبير</h3>
          <p className='slider-text'>خصم يصل 50% عند شرائك.</p>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-background3' interval={2000}>
        <div className='d-flex flex-row justify-content-center aling-items-center'>
        <img 
          style={{height:"296px",width:"313.53px"}}
          className=""
          src={slider4}
          alt="First slide"
        />
        <div className=''>
          <h3 className='slider-title'>هناك خصم كبير</h3>
          <p className='slider-text'>خصم يصل 50% عند شرائك.</p>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliader;