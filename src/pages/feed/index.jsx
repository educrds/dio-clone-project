import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import bannerImg from "../../assets/banner.png";
import { Container, Title, TitleHighlight, Column } from "./styles";
const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={50}
            nome="Pablo Henrique"
            image="https://avatars.githubusercontent.com/u/93599890?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
