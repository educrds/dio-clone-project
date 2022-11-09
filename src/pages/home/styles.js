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

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #fefefe;
`;

const TitleHighlight = styled.span`
  color: #e4105d;
`;
const TextContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  width: 420px;
  margin-bottom: 20px;
  line-height: 22px;
  color: #fefefe;
`;

export { Container, Title, TitleHighlight, TextContent };
