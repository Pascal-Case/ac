'use client';
import items from './/data.js';
import Hello from '@/app/cart/hello';

interface CartItemType {
  name: string;
  price: number;
  count: number;
}

interface BannerProps {
  message?: string;
}

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <Hello />
      {items.map((item: CartItemType) => {
        return <CartItem key={item.name} cartItem={item} />;
      })}
      <Banner message={'Hello'} />
      <Banner message={'World'} />
    </div>
  );
}

function Banner({ message }: BannerProps) {
  return <div>{message}</div>;
}

function CartItem(props: { cartItem: CartItemType }) {
  return (
    <div className="cart-item">
      <p>{props.cartItem.name}</p>
      <p>{props.cartItem.price}$</p>
      <p>{props.cartItem.count}</p>
    </div>
  );
}
