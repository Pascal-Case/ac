import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Context1 } from '../App';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/cartSlice';

function Detail(props) {
  let [fade2, setFade2] = useState('');

  useContext(Context1);

  let dispatch = useDispatch();

  useEffect(() => {
    setFade2('end');
    return () => {
      setFade2('');
    };
  }, []);

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
  let [count] = useState(0);
  let [tab, setTab] = useState(0);

  let { id } = useParams();
  const item = props.shoes.find((i) => i.id == id);

  return (
    <Container className={`start ${fade2}`}>
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
              dispatch(addCart(item));
            }}
          >
            주문하기 {count}
          </Button>
        </Col>
      </Row>

      <Nav variant="pills" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => setTab(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => setTab(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => setTab(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={props.shoes} />
    </Container>
  );
}

function TabContent({ tab, shoes }) {
  let [fade, setFade] = useState('');
  let { stock } = useContext(Context1);

  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      clearTimeout(a);
      setFade('');
    };
  }, [tab]);

  return <div className={`start ${fade}`}>{[<div>내용0 {stock}</div>, <div>내용1</div>, <div>내용2</div>][tab]}</div>;
}

export default Detail;
