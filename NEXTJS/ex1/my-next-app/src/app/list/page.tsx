'use client';

import { useState } from 'react';

export default function List() {
  let products = ['tomato', 'potato', 'carrot'];
  let counts = [0, 0, 0];
  let [count, setCount] = useState(counts);
  return (
    <div>
      <h4 className={'title'}>상품 목록</h4>
      {products.map((product, index) => {
        return (
          <div className="food" key={index}>
            <img src={`food${index}.png`} alt="food" className={'food-img'} />
            <h4>{product}</h4>
            <span style={{ marginRight: '10px' }}>{count[index]}</span>
            <button
              onClick={() => {
                let prevCounts = [...count];
                prevCounts[index] += 1;
                setCount(prevCounts);
              }}
            >
              Good
            </button>
            <button
              onClick={() => {
                let prevCounts = [...count];
                prevCounts[index] -= 1;
                setCount(prevCounts);
              }}
            >
              Bad
            </button>
          </div>
        );
      })}
    </div>
  );
}
