import "./App.css";
import Hello from "./Hello";
import Counter from "./Counter";
import Info from "./Info";
import MemberList from "./MemberList";

function App() {
  return (
    <>
      <Hello name="단짱" color="#3a8a05" />
      <Counter />
      <MemberList />
      <br />
      <br />
      <br />

      <Info />
    </>
  );
}

export default App;
