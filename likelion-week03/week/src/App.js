import "./App.css";
import Hello from "./Hello";
import InlineButton from "./InlineButton";
import ExternalButton from "./ExternalButton";
import LikeButton from "./LikeButton";
import FunnyButton from "./FunnyButton";

function App() {
  return (
    <div>
      <LikeButton />
      <FunnyButton />
      {/*<h1>멋사 프론트 3주차 세미나</h1>
      <Hello />
      <InlineButton />
      <ExternalButton />
      <LikeButton /> */}
    </div>
  );
}

export default App;
