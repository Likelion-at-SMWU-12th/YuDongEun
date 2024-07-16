import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Menubar from "./pages/Menubar";
import Travel from "./pages/Travel";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="home" element={<Home />} />
        <Route path="introduce" element={<Introduce />} />
        <Route path="travel" element={<Travel />} />
      </Route>
    </Routes>
  );
}

export default App;
