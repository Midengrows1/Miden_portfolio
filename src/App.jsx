import s from "./App.module.css";
import { Home, About, Projects } from "@pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className={s.app}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
