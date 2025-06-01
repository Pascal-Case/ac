function Detail(props) {
  return (
    <div className="container">
      {props.shoes.map((item, i) => {
        return (
          <div className="row" key={item.id || i}>
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
        );
      })}
    </div>
  );
}

export default Detail;
