import { ItemContainer } from "./styles";

const SidebarItem = ({ Icon, Text }) => {
  function handleScrollTop() {
    if (Text == "Home") {
      const element = document.getElementById("home");
      const offset = element.offsetTop;
      window.scroll({
        top: offset,
        behavior: "smooth",
      });
    }
    if (Text == "Serviços") {
      const element = document.getElementById("services");
      const offset = element.offsetTop;
      window.scroll({
        top: offset,
        behavior: "smooth",
      });
    }
    if (Text == "Projetos") {
      const element = document.getElementById("projects");
      const offset = element.offsetTop;
      window.scroll({
        top: offset,
        behavior: "smooth",
      });
    }
    if (Text == "Contato") {
      const element = document.getElementById("contact");
      const offset = element.offsetTop;
      window.scroll({
        top: offset,
        behavior: "smooth",
      });
    }
  }

  return (
    <ItemContainer>
      <button type="button" onClick={handleScrollTop}>
        <Icon />
        {Text}
      </button>
    </ItemContainer>
  );
};

export default SidebarItem;
