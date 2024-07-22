import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Comment = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const getComment = () => {
    axios
      .get("http://127.0.1:8000/entries/")
      .then((response) => {
        console.log(response.data);
        setComments(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      {comments.map((comment) => (
        <CommentBox
          key={comment.id}
          onClick={() => navigate(`/comment/${comment.id}`)}
        >
          <Author>{comment.author}</Author>
          <Time>{comment.timestamp}</Time>
          <CommentTxt>{comment.comment}</CommentTxt>
        </CommentBox>
      ))}
    </>
  );
};

export default Comment;

const CommentBox = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 50px;
  background-color: white;
  &:hover {
    cursor: pointer;
    color: #f0873e;
    box-shadow: 0 0 10px rgba(238, 110, 67, 0.727);
    background-color: #fef5f0;
    > span {
      color: #ffcca8;
    }
  }
`;
const Author = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Time = styled.span`
  font-size: 15px;
  color: #c8c8c8;
  font-weight: 600;
  margin-top: 5px;
`;
const CommentTxt = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
