import React from "react";
import { Container, Content } from "./styles";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";
import {
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import SidebarItem from "./SidebarItem";

interface Props {
  active: boolean;
}

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaIdCardAlt} Text="Serviços" />
        <SidebarItem Icon={FaUserAlt} Text="Projetos" />
        <SidebarItem Icon={FaEnvelope} Text="Contato" />
        <div>
          <div>
            <button
              type="button"
              onClick={() =>
                handleRedirect(
                  "https://api.whatsapp.com/send/?phone=%2B5537999080458&text=Ol%C3%A1%2C+quero+falar+com+voc%C3%AA+sobre+o+meu+site&type=phone_number&app_absent=0"
                )
              }
            >
              <AiOutlineWhatsApp />
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                handleRedirect(
                  "https://www.linkedin.com/in/marcello-nazar-7a890922b/"
                )
              }
            >
              <AiFillLinkedin />
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleRedirect("https://github.com/marcelloNazar")}
            >
              <AiOutlineGithub />
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Sidebar;
