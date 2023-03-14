import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  z-index: 2;
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: flex-end;
  height: 10vh;
  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1.5rem;
    color: ${({ theme }) => theme.text};
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;
    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
