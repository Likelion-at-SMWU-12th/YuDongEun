import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  // (1) 인가 코드 추출
  // 인가 코드 받기 요청의 응답인 Redirect URI에 넘어온 쿼리파라미터 'code'의 값(인가코드)을 추출
  const [params, setParams] = useSearchParams();
  const authCode = params.get("code");

  const grant_type = "authorization_code";
  const navigate = useNavigate();

  useEffect(() => {
    // (2) 사전에 설정한 REST API & Redirect URI, 인가 코드 값을 쿼리 파라미터에 싣어 액세스 토큰을 요청
    //     -> 액세스 토큰으로 사용자 정보 가져오기와 가은 카카오 API 호출 가능
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST",
        // body: JSON.stringify({
        //   grant_type: "authorization_code",
        //   client_id: process.env.REACT_APP_REST_API_KEY,
        //   redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        //   code: authCode,
        // }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      const data = res.json();
      // (3) 요청에 대한 응답으로 넘어온 액세스 토큰을 브라우저의 로컬스토리지에 저장하고 url 이동
      data.then((data) => {
        localStorage.setItem("accessToken", data.access_token);
        navigate("/greeting");
      });
    });
  }, []);

  // redirection.js 에서 인가 코드 추출하여 url 이동하기 전까지 표시할 내용
  return <div className="redirection">✨ 카카오 로그인 중 🪽</div>;
};

export default Redirection;
