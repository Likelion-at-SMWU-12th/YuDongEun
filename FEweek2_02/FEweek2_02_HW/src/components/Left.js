import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/PartContext";

const Left = () => {
  const { memberPart } = useTheme();
  return (
    <Wrapper>
      <button onClick={() => memberPart("프론트엔드")}>프론트엔드</button>
      <button onClick={() => memberPart("백엔드")}>백엔드</button>
      <button onClick={() => memberPart("기획/디자인")}>기획/디자인</button>
    </Wrapper>
  );
};

export default Left;

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1.5px solid #e6e6e6;
  overflow-y: auto;
  button {
    display: block;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 50px;
    width: 150px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: white;
    cursor: pointer;
  }
`;
