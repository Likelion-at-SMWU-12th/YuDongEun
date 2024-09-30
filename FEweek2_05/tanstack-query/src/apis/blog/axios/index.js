// axios/index.js
import axios from "axios";

//작성 기능
export const createPost = async (newPost) => {
  const { data } = await axios.post(`/api/posts`, newPost);
  return data;
};

//수정 기능
export const updatePost = async (postId, updatedPost) => {
  const { data } = await axios.post(`/api/posts/${postId}`, updatedPost);
  return data;
};

//조회 기능
export const getPost = async (postId) => {
  const { data } = await axios.get(`/api/posts/${postId}`);
  return data;
};

//삭제 기능
export const deletePost = async (postId) => {
  const { data } = await axios.delete(`/api/posts/${postId}`);
  return data;
};
