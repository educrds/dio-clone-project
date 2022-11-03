import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import bannerImg from "../../assets/banner.png";
import { Container, TextContent, TitleHighlight, Title } from "./styles";
const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora.
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresa mais inovadores do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={""}></Button>
        </div>
        <div>
          <img src={bannerImg} alt="Imagem Principal"></img>
        </div>
      </Container>
    </>
  );
};

export { Home };
