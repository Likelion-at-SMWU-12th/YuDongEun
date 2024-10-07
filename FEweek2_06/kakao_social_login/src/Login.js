import React, { useEffect } from "react";
import logoImg from "./logo.png";

const Login = () => {
  /* authServerLink(카카오), authServerLinkGoogle(구글)*/
  // authServerLink : 사용자를 카카오 로그인으로 이동시킬 link (client_id = REST API KEY / redirect_uri : 카카오 로그인 REDIRECT URI)
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  // authServerLinkGoogle :
  const authServerLinkGoogle = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;

  // 카카오 로그인 링크를 새 창에 여는 함수
  const handleKakao = () => {
    window.location.href = authServerLink;
  };

  // 구글 로그인 링크를 새 창에 여는 함수
  const handleGoogle = () => {
    window.location.href = authServerLinkGoogle;
  };

  return (
    <div>
      <h2>한의학 기반 맞춤형 건강관리 서비스</h2>
      <h1>한케어</h1>
      <img src={logoImg} alt="logo" />
      <div className="btns-container">
        <button className="kakaoBtn" onClick={handleKakao}>
          카카오로 시작하기
        </button>
        <button className="googleBtn" onClick={handleGoogle}>
          구글로 시작하기
        </button>
      </div>
    </div>
  );
};

export default Login;
