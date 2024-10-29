import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();
  useEffect(() => {
    // (1) 브라우저 localStorage에서 accessToken을 가져옴
    const accessToken = localStorage.getItem("accessToken");
    // (2) accessToken을 싣어 카카오 서버에 사용자 정보 요청
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      const userData = res.json();
      userData.then((user) => {
        setName(user.properties.nickname);
        setProfileImg(user.properties.profile_image);
      });
    });
  }, []);

  // (3) 응답 값(카카오 서버에서 가져온 사용자 정보 - 프로필사진, 이름)을 UI에 반영
  return (
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      >
        <h2 className="profile-name">{name}</h2>
      </div>
    </div>
  );
};

export default Greeting;
