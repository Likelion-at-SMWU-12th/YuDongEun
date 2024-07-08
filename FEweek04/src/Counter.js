import { useState, useEffect } from "react";
import "./counter.css";

const Counter = () => {
  //100을 초기값으로 하는 state 생성
  const [state, setState] = useState(100);

  useEffect(() => {
    console.log("useEffect 실행!");
  }, [state]);

  return (
    <div>
      <h4>
        단짱을 좋아한다면 눌러 👍🏻
        <br />
        좋아하는 사람 수: {state}
      </h4>
      {/*setState를 사용하여 state의 값을 1씩 증가시킴*/}
      <button onClick={() => setState(state + 1)}>나도 좋아 ☘️</button>
    </div>
  );
};

export default Counter;
