import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.section`
  > div {
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;

      @media (max-width: 700px) {
        flex-direction: column;
      }
    }
  }
`;

export const Button = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  align-items: center;
  background: ${({ theme }) => theme.backgroundLight};
  border-radius: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.textLight};
  padding: 1rem;
  cursor: pointer;
  margin: 3rem 2rem;
  margin-bottom: 8rem;
  @media (max-width: 1000px) {
    margin: 4rem 0.2rem;
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    margin: 1rem;
    font-size: 2rem;
  }
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
    color: ${({ theme }) => theme.primary};
    filter: brightness(1.1);
    transform: scale(1.03);
    background: ${({ theme }) => theme.gradient};
  }
`;

export const FormContainer = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.primary};
    transition: 0.5s;
    width: fit-content;
    &:disabled {
      opacity: 0.5;
    }
    &:not(:disabled):hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }
  }
  @media (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }
  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  grid-column: 1 / 3;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 700px) {
    grid-column: 1;
  }
  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;
