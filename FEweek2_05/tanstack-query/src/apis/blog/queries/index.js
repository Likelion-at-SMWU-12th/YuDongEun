//queries/index.js

//작성 기능
import { useMutation } from "react-query";
import { createPost } from "../axios/index";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({ title, content }) => createPost(title, content),
  });
};

//수정 기능
import { useMutation } from "react-query";
import { updatePost } from "../axios/index";

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: ({ postId, title, content }) =>
      updatePost(postId, title, content),
    enabled: !!postId, //postId가 있을 때만 실행
  });
};

//조회 기능
import { useQuery } from "react-query";
import { getPost } from "../axios/index";

export const usegetPost = () => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
    enabled: !!postId, //postId가 있을 때만 실행
    staleTime: 10 * 1000, // 데이터가 10초 동안 신선한 상태로 간주
    cacheTime: 1 * 60 * 1000, // 캐시가 1분 동안 유지된 후 메모리에서 제거
  });
};

//삭제 기능
import { useMutation } from "react-query";
import { deletePost } from "../axios/index";

export const usedeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId }) => deletePost(postId),
    onSuccess: () => {
      alert("게시글이 삭제되었습니다.");
      queryClient.invalidateQueries("postList");
    },
  });
};

/* 과제 queries/index.js*/
// 1. 회원가입(sign-up)
import { useMutation } from "react-query";
import { signUp } from "../axios/index";

export const useSignUp = () => {
  return useMutation({
    mutationFn: ({ username, password }) => signUp(username, password),
    enabled: !!username, //postId가 있을 때만 실행
    enabled: !!password,
    onSuccess: () => {
      alert("환영합니다 🤗");
    },
  });
};

//2. 개인정보 수정 (update profile)
import { useMutation } from "react-query";
import { updateProfile } from "../axios/index";

export const useUpdateProfile = () => {
  const queryClient = userQuertClient();

  return useMutation({
    mutationFn: ({ userId, updatedUserInfo }) =>
      updateProfile(userId, updatedUserInfo),
    onSuccess: () => {
      queryClient.invalidateQueries("myPage");
    },
  });
};

//3. 마이페이지 조회 (my page fetch)
import { useQuery } from "react-query";
import { fetchMyPage } from "../axios/index";

export const useFetchMyPage = () => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchMyPage(userId),
    // enabled: !!userId, //userId가 있을 때만 실행
    staleTime: 30 * 1000, // 데이터가 10초 동안 신선한 상태로 간주
    cacheTime: 5 * 60 * 1000, // 캐시가 1분 동안 유지된 후 메모리에서 제거
  });
};

//4. 회원 정보 삭제 (delete user)
import { useMutation } from "react-query";
import { deleteUser } from "../axios/index";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ postId }) => deleteUser(postId),
    onSuccess: () => {
      alert("회원 정보가 삭제되었습니다.");
      queryClient.invalidateQueries("userInfo");
    },
  });
};
