import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge } from '../store/userSlice.js';
import { increamentItem, deleteItem } from '../store/cartSlice.js';
import { memo, useState } from 'react';

let Child = memo(function () {
  console.log('재렌더링');
  return <div>자식</div>;
});

function Cart() {
  let cart = useSelector((state) => state.cart);
  let user = useSelector((state) => state.user);
  let [count, setCount] = useState(0);
  let dispatch = useDispatch();

  return (
    <div>
      <Child></Child>
      <Button className="btn-sm" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <h2>
        {user.name}의 장바구니. {user.age}
      </h2>
      <Button
        onClick={() => {
          dispatch(changeAge(10));
        }}
      >
        {' '}
        age ++
      </Button>
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
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <Button
                    className="btn-secondary btn-sm"
                    onClick={() => {
                      dispatch(increamentItem(item));
                    }}
                  >
                    +
                  </Button>

                  <Button
                    className="ms-1 btn-danger btn-sm"
                    onClick={() => {
                      dispatch(deleteItem(item));
                    }}
                  >
                    삭제
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
