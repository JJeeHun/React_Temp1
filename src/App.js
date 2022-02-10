import Button from "./Button";
import styles from "./App.module.css"; //module 형태로 css 관리시 파일명에 module을 붙여줘야 작동함.
import { useState, useEffect } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detatil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movie/:id" element={<Detail />}></Route>
                <Route path="/hello" element={<h1>hello</h1>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
