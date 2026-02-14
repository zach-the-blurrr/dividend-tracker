import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sample from "./pages/Sample";
import NavBar from "./components/NavBar";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Sample />} />
        <Route path="/home" element={<h1>HOME PAGE</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
