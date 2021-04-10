import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";

import "bootstrap/dist/css/bootstrap.min.css"; //https://react-bootstrap.github.io/
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function App() {
  const [usuario, setUsuario] = useState("");
  const [dados, setDados] = useState("");

  async function obtemUsuario(usuario) {
    let url = `https://api.github.com/users/${usuario}`;
    const api_geo = process.env.REACT_APP_API_GEO;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDados(data)
      })
      .catch((error) =>
        console.error(`Erro ao obter usuário. Erro: ${error.message}`)
      );
  }

  return (
    <React.Fragment>
      {/*Navbar superior*/}
      <Navbar bg="secondary">
        <Navbar.Brand href="#documentacao">FatecHub</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#inicio">Início</Nav.Link>
          <Nav.Link href="#contato">Contato</Nav.Link>
          <Nav.Link href="#documentacao">Documentação</Nav.Link>
        </Nav>

        {/*Formulário direita*/}
        <Form inline>
          <FormControl
            type="text"
            value={usuario}
            onChange={(event) => setUsuario(event.target.value)}
          />

          &nbsp;

          {/*Botão pesquisar usuário*/}
          <Button
            variant="dark"
            onClick={() => {
              obtemUsuario(usuario);
            }}
            disabled={usuario < 1}
          >
            Pesquisar usuário <BsFillPersonFill/>
          </Button>
        </Form>
      </Navbar>

      {/*Jumbotron*/}
      <Jumbotron>
        <h1>
        <BsFillPersonFill/> FatecHub
        </h1>
        <p>
          Descrição projeto. <br></br>
          App desenvolvido em ReactJS e integrado com a [API do GitHub].
        </p>
      </Jumbotron>

      {/*Row*/}
      <Row className="justify-content-center">

        {/*Card*/}
        <Card bg="secondary">
          <Card.Header>
           <strong>Nome: </strong>{dados.name}
          </Card.Header>

          <Card.Body>
          <strong>Perfil:</strong>
            <Card.Img src={`${dados.avatar_url}`}></Card.Img>
          </Card.Body>

          <Card.Footer>
            <strong>Link Github: </strong>
            <a href={dados.html_url} target="_blank" rel="noreferrer">{dados.html_url}</a>
          </Card.Footer>
        </Card>

      </Row>
    </React.Fragment>
  );
}

export default App;