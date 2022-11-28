import { Container, Row } from "react-bootstrap";
import ProdactCard from '../../components/Prodact/ProdactCard'
import Subtitle from "../Utlity/Subtitle"

function ProdactCardContiner({title,btntitle ,path}) {
    return (
     <Container >
        <Subtitle title={title} btntitle={btntitle} path={path}/>
        <Row className="my-2 d-flex justify-content-between">
          <ProdactCard/>
          <ProdactCard/>
          <ProdactCard/>
          <ProdactCard/>
        </Row>
     </Container>
    );
  }
  
  export default ProdactCardContiner;