import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import Header from './parts/header'
import Welcome from './pages/welcome'
import Diary from './pages/diary'
import About from './pages/about'
import { Container,Row,Col } from 'react-bootstrap'

function App() {
  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col md="8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
