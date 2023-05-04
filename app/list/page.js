"use client";

import { useState } from "react";

export default function page() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState([0, 0, 0]);

  return (
    <div>
      <h4 className="title">상품 목록</h4>

      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <button
              onClick={() => {
                let copy = [...수량];
                if (i == 0) {
                  copy[0]--;
                } else if (i == 1) {
                  copy[1]--;
                } else {
                  copy[2]--;
                }
                수량변경(copy);
              }}
            >
              -
            </button>
            <span>{수량[i]}</span>
            <button
              onClick={() => {
                let copy = [...수량];
                if (i == 0) {
                  copy[0]++;
                } else if (i == 1) {
                  copy[1]++;
                } else {
                  copy[2]++;
                }
                수량변경(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
