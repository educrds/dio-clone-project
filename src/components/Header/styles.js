import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 80%;
  max-height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BuscarInputContainer = styled.div`
  width: 175px;
  height: 30px;
  background: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.a`
  font-style: normal;
  font-size: 14px;
  line-height: 25px;
  color: #fefefe;
  margin-right: 12px;
  text-decoration: none;
`;
const MenuRight = styled.a`
  font-style: normal;
  font-size: 14px;
  line-height: 25px;
  color: #fefefe;
  margin-right: 12px;
  text-decoration: none;
`;

const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 2px solid #fefefe;
`;

const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  padding: 8px;
  color: #fefefe;
`;

export {
  Container,
  Row,
  Column,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  UserPicture,
  Input,
};
