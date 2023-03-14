import Banner from "@src/screens/Banner";
import Header from "@src/screens/Header";
import { ProjetoContainer } from "@src/styles/ProjectStyles";

export default function Vetcenter() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <ProjetoContainer>
      <Banner
        title="PitDelivery"
        type="Aplicativo Mobile"
        imgUrl="https://arquivo.devmedia.com.br/marketing/img/artigo-hello-world-com-flutter-40321.png"
      />

      <main>
        <p>
          Aplicativo mobile sendo desenvolvido em Flutter, e o back end
          ultilizando o framework Adonis.js e o banco de dados MySQL.{" "}
        </p>
        <button
          type="button"
          onClick={() => handleRedirect("https://github.com/marcelloNazar")}
        >
          <a>Ver projeto</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
