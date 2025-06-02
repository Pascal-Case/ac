import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css';
import Card from './components/Card';
import data from './data';
import Detail from './pages/Detail';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

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
                  navigate('/detail');
                }}
              >
                상세페이지
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Row>
                {shoes.map((item, i) => {
                  return <Card key={item.id} shoes={item}></Card>;
                })}
              </Row>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
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
