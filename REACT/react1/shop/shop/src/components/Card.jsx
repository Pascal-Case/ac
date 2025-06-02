import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Card(props) {
  let navigate = useNavigate();
  return (
    <>
      <Col md={4} className="text-center">
        <img
          src={props.shoes.src}
          width="50%"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(`detail/${props.shoes.id}`)}
        ></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
      </Col>
    </>
  );
}

export default Card;
