import React from "react";
import Galleria from "./components/Galleria";
import { Container } from '@material-ui/core';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <br />
      <Container>
        <Galleria />
      </Container>
      <br />
      <Footer />
    </div>
  );
}
export default App;
