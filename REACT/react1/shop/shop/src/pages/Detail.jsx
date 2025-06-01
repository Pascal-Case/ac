import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  const item = props.shoes.find((i) => i.id == id);

  return (
    <div className="container">
      <div className="row" key={item.id}>
        <div className="col-md-6">
          <img src={item.src} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <YellowBtn className="btn" bg="lightgray">
            주문하기
          </YellowBtn>
        </div>
      </div>
    </div>
  );
}

export default Detail;
