import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; // navigate 제거

const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const getDetail = useCallback(() => {
    axios
      .get(`http://127.0.0.1:8000/entries/${id}/`)
      .then((response) => {
        console.log(response);
        setAuthor(response.data.author);
        setComment(response.data.comment);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    getDetail();
  }, [getDetail]);

  // editComment 함수 -> 엔트리 수정
  const editComment = () => {
    axios
      .put(`http://127.0.0.1:8000/entries/${id}/`, {
        author: author,
        comment: comment,
      })
      .then((response) => {
        console.log(response);
        alert("수정되었습니다.");
        navigate(`/comment/${id}`); // 수정 후 상세 페이지로 이동
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <InputTitle>이름</InputTitle>
      <StyledInput
        placeholder="이름을 입력해주세요."
        value={author}
        onChange={onChangeAuthor}
      />
      <InputTitle>내용</InputTitle>
      <StyledTxtarea
        placeholder="방명록 내용을 입력해주세요."
        value={comment}
        onChange={onChangeComment}
      />
      <BtnDiv>
        <Button txt={"수정하기"} onBtnClick={editComment} />
      </BtnDiv>
    </Wrapper>
  );
};

export default EditPage;

const Wrapper = styled.div`
  margin-top: 50px;
  //padding: 0 100px 0 0;
`;
const InputTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: white;
  padding: 10px 30px;
  border-radius: 15px;
  width: 300px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0 30px 0;
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;
const StyledTxtarea = styled.textarea`
  border: none;
  outline: none;
  width: calc(100% - 60px);
  height: 200px;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  resize: none;
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;
const BtnDiv = styled.div`
  margin-top: 50px;
  display: flex;
  > Button {
    margin-left: auto;
  }
`;
