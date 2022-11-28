import { Button, Card,Col } from "react-bootstrap";
import favoff from '../../images/fav-off.png'
import prod1 from '../../images/prod1.png'
import rate from '../../images/rate.png'
function ProdactCard() {
    return (
      <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
        <Card
         className="my-2"
         style={{
           width: '100%',
           height: '345px',
           borderRadius:"8px",
           border:"none",
           backgroundColor:"#ffffff",
           boxShadow:"0 2px 2px 0 rgba(151,151,0.5)",
           }}>
        <Card.Img style={{height:"228px", width:"100%"}} src={prod1} />
        <div className="d-flex justify-content-end mx-2">
          <img 
             src={favoff}
             alt="foto"
             className="text-center"
             style={{height:"24px",width:"26px"}}/>
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">
              جهاز كمبيوتر محمول {" "}
            </div>
          </Card.Title>
          <Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img 
                className=""
               src={rate}
               height="16px"
               width="16px"/>
               <div className="card-rate mx-2" >4.5</div>
            </div>
            <div className="d-flex">
              <div className="card-price">8825</div>
              <div className="card-currency mx-1">dz</div>
            </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    );
  }
  
  export default ProdactCard;