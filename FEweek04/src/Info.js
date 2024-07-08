import React, { useState, useEffect } from "react";
import "./info.css";

const Info = () => {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [id, setId] = useState("");
  const [part, setPart] = useState("");
  const [introduction, setIntroduction] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeSchool = (e) => {
    setSchool(e.target.value);
  };

  const onChangeMajor = (e) => {
    setMajor(e.target.value);
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePart = (e) => {
    setPart(e.target.value);
  };

  const onChangeIntroduction = (e) => {
    setIntroduction(e.target.value);
  };

  return (
    <div class={"paper"}>
      <div>
        <h3>[단짱 지원서]</h3>
        <b>이름: </b> {name}
        <br />
        <b>학교: </b> {school}
        <br />
        <b>전공: </b> {major}
        <br />
        <b>학번: </b> {id}
        <br />
        <b>희망 파트: </b> {part}
        <br />
        <b>자기소개: </b> {introduction}
      </div>
      <br />
      <div class={"written"}>
        <h3>[지원서 작성란]</h3>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
        <br />
        <input value={school} onChange={onChangeSchool} placeholder={"학교"} />
        <br />
        <input vlaue={major} onChange={onChangeMajor} placeholder={"전공"} />
        <br />
        <input value={id} onChange={onChangeId} placeholder={"학번"} />
        <br />
        <input
          value={part}
          onChange={onChangePart}
          placeholder={"희망 파트 (💻프론트엔드 / 🖇️백엔드 / 📍기획&디자인)"}
          size={40}
        />
        <br />
        <input
          value={introduction}
          onChange={onChangeIntroduction}
          placeholder={"자기소개(300자 이내)"}
          size={40}
        />
      </div>
    </div>
  );
};

export default Info;
