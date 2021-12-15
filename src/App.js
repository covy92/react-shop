import logo from './logo.svg';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Puff-Puff</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
  <div className="jumbotron">
    <h1>대문</h1>
    <p>안녕하세요 퍼프퍼프입니다</p>
  </div>
  <div className="container">
    <div className="row">
    <div className="col-md-4">
        <img src=""/>
        <h4>상품명</h4>
        <p>상품설명&가격</p>
      </div>
      <div className="col-md-4">
        <img src=""/>
        <h4>상품명</h4>
        <p>상품설명&가격</p>
      </div>
      <div className="col-md-4">
        <img src=""/>
        <h4>상품명</h4>
        <p>상품설명&가격</p>
      </div>
    </div>

  </div>
    </div>
  );
}

export default App;
