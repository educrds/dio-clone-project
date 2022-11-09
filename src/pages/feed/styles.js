import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  max-width: 88%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 24px;
  line-height: 25px;
  color: #fefefe;
`;

const TitleHighlight = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 24px;
  line-height: 25px;
  color: #fefefe70;
`;
const Column = styled.div`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`;

export { Container, Title, TitleHighlight, Column };
