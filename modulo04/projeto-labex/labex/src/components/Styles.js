import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`; 

const space = keyframes`
  0%{
    transform: scale(0) translateX(0)
  }
  25%{
    transform: scale(1) 
  }
  50%{
    transform: translateX(60px)
  }
  75%{
    transform: translateX(-120px)
  }
  100%{
    transform: translateX(0px)
  }
`;

export const StyledButton = styled.p`
  padding: 1em;
  background-color: #335863;
  border-radius: 10px;
  color: #fff;
  text-shadow: 1px 1px 3px #000;
  box-shadow: 1px 1px 1px #ddd;
  cursor: pointer;
  transition: .1s;
  &:hover{
    background-color: #1a3a43;
    box-shadow: 2px 2px 2px #ddd;
    transform: scale(1.1)
  }
`;

export const ContainerHP = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  div{
    display: flex;
    gap: 2em;
  }
`;

export const ContainerErrorPage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  img{
    width: 100%;
    height: 100%;
    animation: ${space} 2s ease-in-out;
    position: relative;
  }
  p{
    animation: ${space} 2s ease-in-out;
    position: absolute;
    padding: 1em 2em;
    margin: 1em;
    color: #aaa;
    border: 1px solid #aaa;
    border-radius: 5px;
    cursor: pointer;
    text-transform:uppercase;
    &:hover{
      background: #aaa;
      color: #fff;
    }
  }
`;

export const ContainerListTP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  margin-bottom: 5%;
  gap: 1.5em;
  h1{
    font-size: 3em;
  }
  div{
    display: flex;
    gap: 1em;
  }
  ul{
    list-style: none;
    width: 35%;
    background-color: #d8d8d9;
    padding: 1em 1.5em;
    border-radius: 10px;
    box-shadow: 1px 1px 8px 2px #999;
    transition: .3s;
    cursor: pointer;
    &:hover{
      transform: scale(1.1)
    }
    li{
      padding: .5em;
      strong{
        color: #0a2b34;
        text-shadow: 1px 1px 1px #ccc;
      }
    }
  }
`;
