import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import CommentPage from "./pages/CommentPage";
import WritePage from "./pages/WritePage";
import DetailPage from "./pages/DetailPage";

function App() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title onClick={() => navigate("/")}>숙멋 프론트의 방명록 🦁</Title>
      <Routes>
        <Route path="/" element={<CommentPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/comment/:id" element={<DetailPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

//styled 위치는 상관 없음!
const Wrapper = styled.div`
  padding: 80px 100px;
  width: calc(100vw - 200px);
  background-color: #f0f0f0;
  min-height: 100vh;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: bolder;
  cursor: pointer;
`;
