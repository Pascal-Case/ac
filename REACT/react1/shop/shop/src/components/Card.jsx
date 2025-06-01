import Col from 'react-bootstrap/Col';

function Card(props) {
  return (
    <>
      <Col md={4} className="text-center">
        <img src={props.shoes.src} width="50%"></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
      </Col>
    </>
  );
}

export default Card;
