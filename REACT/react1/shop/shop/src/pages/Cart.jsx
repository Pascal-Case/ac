import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './../Stroe.js';
function Cart() {
  let cart = useSelector((state) => state.cart);
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();

  console.log(cart);

  return (
    <div>
      <h2>{user}의 장바구니</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <Button
                    className="btn-secondary btn-sm"
                    onClick={() => {
                      dispatch(changeName());
                    }}
                  >
                    +
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
