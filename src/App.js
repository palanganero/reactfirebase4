
import { Container, Row, Navbar,Col } from "react-bootstrap";
import "./App.css";
import Componente from "./components/Componente";
import { useState } from "react";

function App() {



  return (
    <>

    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <Componente />
        </Col>
      </Row>
    </Container>
  </>
    
  );
}

export default App;