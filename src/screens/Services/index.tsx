import SectionTitle from "../SectionTitle";
import ServiceItem from "./ServiceItem";
import { Container } from "./styles";

export default function Services() {
  return (
    <Container id="services">
      <SectionTitle title="Serviços" />

      <section>
        <ServiceItem
          year="Automação"
          title="Python"
          description="A IoT permite conectar e integrar objetos do dia a dia à internet, tornando-os capazes de compartilhar dados de maneira automatizada facilitando a vida das pessoas de várias maneiras."
        />
        <ServiceItem
          year="Mobile"
          title="Flutter, Adonis, SQL"
          description="Flutter é um framework de aplicativos móveis que torna o processo de desenvolvimento mais rápido, sua principal vantagem é a capacidade de desenvolver aplicativos iOS e Android utilizando o mesmo código-fonte."
        />
        <ServiceItem
          year="Web-site"
          title="NextJs, SQL"
          description="O Next.js é uma biblioteca de desenvolvimento web que permite renderizar as páginas do lado do servidor, melhorando o desempenho e a experiência do usuário."
        />
      </section>
    </Container>
  );
}
