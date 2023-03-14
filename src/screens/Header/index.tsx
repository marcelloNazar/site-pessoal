import Link from './Link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Container } from './styles';
import Sidebar from '../Sidebar';

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
}
