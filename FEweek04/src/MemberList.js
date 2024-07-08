import React, { useState, useEffect } from "react";
import axios from "axios";
import "./memberlist.css";

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/danJJangs")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>⭐소중한 단짱 팀원들⭐</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <h3>{member.part}</h3>
            <p>{member.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
