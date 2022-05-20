import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';


// App.js
export const GlobalStyle = createGlobalStyle`
  body, html{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #cde;
`;


// LoginScreen.jsx
export const Title = styled.h1`
  text-align: center;
  font-size: 1.4em;
  padding-bottom: 15%;
`;

export const Login = styled.div`
  height: 70vh;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #00F9, #F009);
  border: 1px solid #5451517a;
  border-radius: 20px;
  box-shadow: 3px 3px 20px #0005;
  @media screen and (max-width: 600px) {
    height: 100vh;
    width: 99vw;
  }
`;

export const Form = styled.form`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 10%;
  text-align: center;
  input{
    padding: .6rem;
    border-radius: 10px;
  }
  input:focus{
    background: #ddd;  
  }
  button {
    cursor: pointer;
    padding: 0.6rem;
    border-radius: 10px;
    transition: 0.3s linear;
    &:hover {
      background-color: #ccca;
      transform: scale(1.1);
    }
  }
`;