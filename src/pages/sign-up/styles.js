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
const TermsText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  color: #fefefe;
`;
const LoginText = styled.a`
  font-family: "Open Sans";
  margin: 1vh 0;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: rgba(35,221,122,1);
  cursor:pointer;
`;

export {
  Container,
  Title,
  TitleLogin,
  SubTitleLogin,
  TermsText,
  LoginText,
  Wrapper,
  Column,
  Row,
};
