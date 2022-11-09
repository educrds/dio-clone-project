import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  max-width: 88%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 300px;
`;
const Column = styled.div`
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #fefefe;
`;
const TitleLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
`;
const SubTitleLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 35px;
  line-height: 25px;
`;
const ForgotText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 19px;
  color: #e5e044;
`;
const CreateText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 19px;
  color: #e23dd7;
`;

export {
  Container,
  Title,
  TitleLogin,
  SubTitleLogin,
  ForgotText,
  CreateText,
  Wrapper,
  Column,
  Row,
};
