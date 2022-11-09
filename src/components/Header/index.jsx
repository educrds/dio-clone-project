import React from "react";
import { Button } from "../Button";
import Logo from "../../assets/dio-logo.png";
import {
  Container,
  Row,
  Column,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  UserPicture,
  Input,
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="Logo DIO" width={64}></img>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..."></Input>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/93599890?v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar"></Button>
              <Button title="Cadastrar"></Button>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
