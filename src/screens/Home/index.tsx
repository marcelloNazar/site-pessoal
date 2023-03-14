import { Container, TextContainer, InfosContainer, CodeItem } from "./styles";
import picture from "@src/assets/avatarMarcello.png";

export default function HomePage() {
  return (
    <Container data-aos="fade-up">
      <div className="gradiente">
        <img src="/assets/avatarMarcello.png" alt="Minha foto" />
      </div>
      <div>
        <TextContainer id="home">
          <h1>Marcello</h1>
          <h2>DEV FULLSTACK FRELANCER</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Serviços: </span> {"\u007B"}
            <div>
              Web: <span className="blue">Web sites em NextJs,</span>
            </div>
            <div>
              Mobile: <span className="blue">IOs e Androide em Flutter,</span>
            </div>
            {"\u007D"}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Automação Residencial: </span> {"\u007B"}
            <div>
              Integrações: <span className="blue">Alexa | Aplicativo,</span>
            </div>
            <div>
              Iluminação: <span className="blue">True,</span>
            </div>
            <div>
              Eletronicos: <span className="blue">True,</span>
            </div>
            <div>
              Audiovisual: <span className="blue">True,</span>
            </div>
            <div>
              Portão: <span className="blue">True,</span>
            </div>
            <div>
              Trancas Biometricas: <span className="blue">True,</span>
            </div>
            {"\u007D"}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
