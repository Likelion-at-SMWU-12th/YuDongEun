// axios/index.js
import axios from 'axios';

export const createPost = async (newPost) => {
    const {data} = await axios.post(`/api/posts`, newPost);
    return data;
};

export const updatePost = async (postId, updatedPost) => {
    const {data} = await axios.post(`/api/posts/${postId}`, updatedPost);
    return data;
};

export const getPost = async (postId) => {
    const {data} = await axios.get(`/api/posts/${postId}`);
    return data;
}

export const deletePost = async (postId) => {
    const {data} = await axios.delete(`/api/posts/${postId}`);
    return data,
}

//queries/index.js
import {useMutation} from "react-query";
import {createPost} from "../axios/index";

export const useCreatePost = () => {
    return useMutation({
        mutationFn: ({title, content}) => createPost(title, content), 
    });
}


import {updatePost} from "../axios/index";

export const useUpdatePost = () => {
    return useMutation({
        mutationFn: ({postId, title, content}) => updatePost(postId, title, content),
        enabled: !!postId,
    })
}


import {getPost} from "../axios/index";

export const usegetPost = () => {
    return useQuery({
        queryFn: ({postId}) => getPost(postId),
        enabled: !!postId,
        staleTime: 10 * 1000,
        cacheTime: 1 * 60 * 1000,
    })
}

import {deletePost} from "../axios/index";

export const usedeletePost = () => {
    return useMutation({
        queryFn: ({postId}) => deletePost(postId),
        onSuccess: (data, variables, context) => { 
            alert()
        }
        
}