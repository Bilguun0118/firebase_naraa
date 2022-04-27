import "./App.css";
import { Login } from "./login";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Home page</h2>;
}
function About() {
  return <h2>About page</h2>;
}
function Users() {
  return <h2>Users page</h2>;
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
