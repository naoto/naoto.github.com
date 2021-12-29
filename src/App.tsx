import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import Header from './parts/header'
import Welcome from './pages/welcome'
import Diary from './pages/diary'
import About from './pages/about'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
    <Header />
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Container>
    </>
  );
}

export default App;
