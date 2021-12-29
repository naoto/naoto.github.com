import React, { useState } from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Header: React.FC = () => {
  const [word, setWord] = useState('aa')

  function google() {
    setWord(word)
    window.location.href = "https://google.com/search?q=site:naoto.github.io+" + word
  }

  return (
    <Navbar className="navbar-custom" expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">Naoto Code</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/diary">Diary</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={google()}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="me-2"
              name="sh-word"
            />
            <Button variant="outline-success" onClick={google}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header