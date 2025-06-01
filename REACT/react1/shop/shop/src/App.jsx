import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import './App.css';
import Card from './components/Card';
import data from './data';
import Detail from './components/Detail';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">홈</Nav.Link>
              <Nav.Link href="/detail">상세페이지</Nav.Link>
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
                {data.map((item, i) => {
                  return <Card key={item.id} shoes={item}></Card>;
                })}
              </Row>
            </>
          }
        />
        <Route path="/detail" element={<Detail shoes={data}></Detail>} />
      </Routes>
    </>
  );
}

export default App;
