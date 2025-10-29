import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/css/index.css";
import { Home } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
