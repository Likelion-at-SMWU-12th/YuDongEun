import "./App.css";
import Hello from "./Hello";
import Counter from "./Counter";
import Info from "./Info";
import MovieList from "./MovieList";

function App() {
  return (
    <>
      <Info />
      <br />
      <Hello name="유동은" color="green" />
      <Counter />
      <MovieList />
    </>
  );
}

export default App;
