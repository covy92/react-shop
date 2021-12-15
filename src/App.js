/*eslint-disable*/

import logo from './logo.svg';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Data from './data.js'
import {Link, Routes, Route, Switch} from 'react-router-dom';
import Detail from './Detail.js'

function App() {

  let [shoes, shoesSet] =useState(Data);

  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Puff-Puff</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link > <Link to='/'>Home</Link></Nav.Link>
      <Nav.Link ><Link to='/detail'>Detail</Link></Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
  
  <Routes>
      <Route excat path="/" element={
      <div className="jumbotron">
      <h1>대문</h1>
      <p>안녕하세요 퍼프퍼프입니다</p>
      <div className="container">
    <div className="row">
      {
        shoes.map((a,i)=>{
          return <Card shoes={a} i={i} key={i}/>
        })
      }
    </div>

  </div>
    </div>
      } />
      <Route exact path="/detail" element={
        <Detail shoes={shoes}/>
      } />
      <Route path="/:id" element={
        <div>잘못된 경로</div>
      } />

    </Routes>

   
  
    </div>
  );
}


function Card(props){


  return(
    <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'}/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content} & {props.shoes.price}</p>
      </div>
  )
}


export default App;


