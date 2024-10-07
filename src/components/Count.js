import { useState, useReducer } from "react";
import styled from "styled-components";
import { countReducer, initState } from "../reducers/countReducer";
const StyleDiv = styled.div;

const Count = () => {
  // 3. useReducer(리듀서 함수, 초기 상태) 훅을 사용하여 상태 (state)와 디스패치 (dispatch)를 관리
  //     - dispatch : 액션을 리듀서로 보내는 함수로, 액션 객체를 인자로 받는다.
  const [state, dispatch] = useReducer(countReducer, initState);

  return (
    <StyleDiv>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
    </StyleDiv>
  );
};
export default Count;
