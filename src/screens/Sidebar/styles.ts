import styled from "styled-components";

interface Props {
  sidebar: boolean;
}

export const Container = styled.div<Props>`
  background-color: ${({ theme }) => theme.backgroundLight};
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 200px;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  > div {
    > div {
      display: flex;
      flex-direction: row;

      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: ${({ theme }) => theme.textLight};
      padding: 10px;
      cursor: pointer;
      margin: 0 15px 20px;
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        color: ${({ theme }) => theme.textLight};
        font-size: 1rem;

        > button {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          height: 100%;
          background: none;
          border: none;
          color: ${({ theme }) => theme.textLight};
          font-size: 1rem;
          > svg {
            margin: 0 1rem;
          }
        }
      }
    }
  }
  > svg {
    position: fixed;
    color: white;
    width: 2rem;
    height: 2rem;
    margin-top: 2rem;
    margin-left: 2rem;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 6rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  background: #11172b;
  border-radius: 1rem;
  font-size: 20px;
  color: ${({ theme }) => theme.textLight};
  padding: 10px;
  cursor: pointer;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }
  > button {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.textLight};
    font-size: 1rem;
  }
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.02);
  }
`;
