import SectionTitle from "../SectionTitle";
import Form from "./Form";
import { Container, Button } from "./styles";
import {
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export default function FormC() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <Container id="contact">
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={<>Entre em contato comigo!</>}
      />

      <div>
        <div>
          <Button
            onClick={() =>
              handleRedirect(
                "https://api.whatsapp.com/send/?phone=%2B5537999080458&text=Ol%C3%A1%2C+quero+falar+com+voc%C3%AA+sobre+o+meu+site&type=phone_number&app_absent=0"
              )
            }
          >
            <AiOutlineWhatsApp />
            WhatsApp
          </Button>
          <Button
            onClick={() =>
              handleRedirect(
                "https://www.linkedin.com/in/marcello-nazar-7a890922b/"
              )
            }
          >
            <AiFillLinkedin />
            LinkedIn
          </Button>
          <Button
            onClick={() => handleRedirect("https://github.com/marcelloNazar")}
          >
            <AiOutlineGithub />
            GitHub
          </Button>
        </div>
      </div>
    </Container>
  );
}
