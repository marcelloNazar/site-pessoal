import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  > main {
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }
`;
