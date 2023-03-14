import {
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Container } from "./styles";

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineWhatsApp
            onClick={() =>
              handleRedirect(
                "https://api.whatsapp.com/send/?phone=%2B5537999080458&text=Ol%C3%A1%2C+quero+falar+com+voc%C3%AA+sobre+o+meu+site&type=phone_number&app_absent=0"
              )
            }
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                "https://www.linkedin.com/in/marcello-nazar-7a890922b/"
              )
            }
          />
          <AiOutlineGithub
            onClick={() => handleRedirect("https://github.com/marcelloNazar")}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
