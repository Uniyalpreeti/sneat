import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { LinkPage } from "./pages/LinkPage";
import Container from "./container/Container";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/home" element={<Container />}>
          <Route index element={<Home />}/>
            <Route path="linkpage" element={<LinkPage />}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
