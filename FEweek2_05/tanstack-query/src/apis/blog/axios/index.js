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

/* 과제 axios.index.js*/
//1. 회원 가입(sign-up)
export const signUp = async (newUser) => {
  const { data } = await axios.post(`/api/users`, newUser);
  return data;
};

//2. 개인정보 수정 (update profile)
export const updateProfile = async (userId, updatedUserInfo) => {
  const { data } = await axios.put(`/api/users/${userId}`, updatedUserInfo);
  return data;
};

//3. 마이페이지 조회 (my page fetch)
export const fetchMyPage = async (userId) => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data;
};

//4. 회원 정보 삭제 (delete user)
export const deleteUser = async (userId) => {
  const { data } = await axios.delete(`api/users/${userId}`);
  return data;
};
