import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import Header from './parts/header'
import Diary from './pages/diary'
import About from './pages/about'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/diary" element={<Diary />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
