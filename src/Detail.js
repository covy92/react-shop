/** eslint-disable */
import React,{useState} from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';


let 박스 =styled.div`
  padding: 20px;
`;
let 제목 = styled.h4`
  font-size:25px;
`;

function Detail(props){

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(상품){
    return 상품.id===id
  })
  let navigate = useNavigate()();

  return(
  <div className="container">

        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button className="btn btn-danger" onClick={() => navigate('/')}>go back</button>
          </div>
        </div>
  </div>
  )
}
export default Detail;
