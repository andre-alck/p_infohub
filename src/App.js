/*Importando React e ícone*/
import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";

/*Importando Bootstrap e alguns de seus itens*/
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import logo from "../src/logo.png"

function App() {
  const [usuario, setUsuario] = useState(""); //Armazena o nome digitado pelo usuário.
  const [dados, setDados] = useState(""); //Armazena os dados do usuário.

  /*Realiza o processamento dos dados do usuário.*/
  async function obtemUsuario(usuario) {
    let url = `https://api.github.com/users/${usuario}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDados(data);
      })
      .catch((error) =>
        console.error(`Erro ao obter usuário. Erro: ${error.message}`)
      );
  }

  return (
    <React.Fragment>
      {/*Navbar superior - apresenta o nome do projeto, contato e documentação.*/}
      <Navbar bg="secondary">
        <Navbar.Brand>InfoHub</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            href="https://github.com/andre-alck"
            target="_blank"
            rel="noreferrer"
          >
            Contato
          </Nav.Link>
          <Nav.Link
            href="https://github.com/andre-alck/infohub/blob/main/README.md"
            target="_blank"
            rel="noreferrer"
          >
            Documentação
          </Nav.Link>
        </Nav>

        {/*Formulário direita - caixa onde o usuário digita o username desejado.*/}
        <Form inline>
          <FormControl
            type="text"
            value={usuario}
            onChange={(event) => setUsuario(event.target.value)}
          />
          &nbsp;
          {/*Botão pesquisar usuário - executa função obtemUsuario, começando o processamento dos dados.*/}
          <Button
            variant="dark"
            onClick={() => {
              obtemUsuario(usuario);
            }}
            disabled={usuario < 1}
          >
            Pesquisar usuário <BsFillPersonFill />
          </Button>
        </Form>
      </Navbar>

      {/*Jumbotron - Descrição básica do projeto.*/}
      <Jumbotron>
      <img src={logo} alt="logo_image"/>
        <p>
          Projeto realizado utilizando a API do GitHub com base em React e
          Bootstrap.<br></br>
          Digite o nome do usuário desejado no formulário e, em seguida, clique
          no botão "Pesquisar usuário {<BsFillPersonFill />}".
        </p>
      </Jumbotron>

      {dados && (
        <Row className="justify-content-center">
          {/*Card - Localização dos dados do usuário.*/}
          <Card bg="secondary">
            <Card.Header>
              <strong>Nome: </strong>
              {dados.name}
            </Card.Header>

            <Card.Body>
              <strong>Perfil:</strong>
              <Card.Img src={`${dados.avatar_url}`}></Card.Img>
            </Card.Body>

            <Card.Footer>
              <strong>Link Github: </strong>
              <a href={dados.html_url} target="_blank" rel="noreferrer">
                {dados.html_url}
              </a>
            </Card.Footer>
          </Card>
        </Row>
      )}

    </React.Fragment>
  );
}

export default App;