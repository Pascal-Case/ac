import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Detail(props) {
  // 재랜더링마다
  useEffect(() => {});
  // mount시 1회
  useEffect(() => {}, []);

  useEffect(() => {
    return () => {
      // unmount시 1회
    };
  }, []);
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
      console.log('end!');
    }, 2000);

    return () => {
      console.log('기존 타이머 제거');
      clearTimeout(timer);
    };
  }, []);

  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);

  let { id } = useParams();
  const item = props.shoes.find((i) => i.id == id);

  return (
    <Container>
      {alert ? (
        <div className="alert alert-warning" id="discount">
          할인
        </div>
      ) : null}
      <Row key={item.id}>
        <Col md={6}>
          <Image src={item.src} width="100%" thumbnail />
        </Col>
        <Col md={6} className="text-center">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <Button
            variant="outline-success"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            주문하기 {count}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
