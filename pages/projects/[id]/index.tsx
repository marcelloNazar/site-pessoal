import Banner from "@src/screens/Banner";
import Header from "@src/screens/Header";
import { ProjetoContainer } from "@src/styles/ProjectStyles";

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <Banner
        title="{projeto.title}"
        type="{projeto.type}"
        imgUrl="https://theartsdevelopmentcompany.org.uk/wp-content/uploads/2019/02/Website-Building-Landscape-1280x640.jpg"
      />

      <main>
        <p>
          alguma descrição mdsuifhiuweghfsm,fbkas SDJFHBJKSBVLCAD GFLKASDGJFKLAS{" "}
        </p>
        <button type="button">
          <a>Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
