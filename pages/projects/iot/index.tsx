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
        title="Automação residencial"
        type="IoT"
        imgUrl="http://futura.ws/wp-content/uploads/2019/10/188476-fique-por-dentro-do-que-e-a-automacao-residencial-1280x640.jpg"
      />

      <main>
        <p>
          Automação residencial de iluminação e aparelhos com sensor de
          infravermelho, automatizados por aplicativos ou Alexa.{" "}
        </p>
        <button
          type="button"
          onClick={() => handleRedirect("https://github.com/marcelloNazar")}
        >
          <a>Ver videos</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
