// 1. React 관련 import (가장 먼저)
import { createContext, useEffect, useState, lazy, Suspense } from 'react';

// 2. 라우터 관련 import
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

// 3. 외부 라이브러리 import (알파벳 순)
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// 4. Bootstrap/UI 라이브러리 import (관련된 것끼리 그룹화)
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// 5. 스타일 import
import './App.css';

// 6. 상대 경로 import (내부 모듈)
import Card from './components/Card';
import data from './data';

const Detail = lazy(() => import('./pages/Detail'));
const Cart = lazy(() => import('./pages/Cart'));

export let Context1 = createContext();

function App() {
  useEffect(() => {
    const latest = localStorage.getItem('latest');
    if (!latest) localStorage.setItem('latest', JSON.stringify([]));
  }, []);

  let [shoes, setShoes] = useState(data);
  let [stock] = useState([10, 11, 12]);
  let navigate = useNavigate();

  const result = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch('https://codingapple1.github.io/userdata.json').then((res) => {
        console.log('요청');
        return res.json();
      }),
  });

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">홈</Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/cart');
                }}
              >
                장바구니
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              안녕하세요 {result.isLoading && '로딩중'}
              {result.isError && '에러'}
              {result.data && result.data.name}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-bg"></div>
                <Row>
                  {shoes.map((item) => {
                    return <Card key={item.id} shoes={item}></Card>;
                  })}
                </Row>
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Context1.Provider value={{ stock, shoes }}>
                <Detail shoes={shoes}></Detail>
              </Context1.Provider>
            }
          />
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/about" element={<About></About>}>
            <Route path="member" element={<div>멤버</div>}></Route>
            <Route path="location" element={<div>장소</div>}></Route>
          </Route>
          <Route path="/event" element={<Event></Event>}>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
            <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>

      <div className="text-center d-none">
        <Button
          className="btn-success"
          onClick={() => {
            axios
              .get('https://codingapple1.github.io/shop/data2.json')
              .then((res) => {
                const prev = [...shoes, ...res.data];
                setShoes(prev);
              })
              .catch(() => {
                console.log('fail');
              });
          }}
        >
          버튼
        </Button>
      </div>
    </>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>About</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
