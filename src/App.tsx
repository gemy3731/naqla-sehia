import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/css/index.css";
import { Home } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
