import { useParams } from 'react-router-dom';

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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
