import styled from "styled-components"
import { createGlobalStyle } from "styled-components";

//-- Components Area -- //

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
export const ContainerNav = styled.div`
  width: 20vw;
  height: 25vh;
  background-color: #1A181B;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  li {
    height: 25%;
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 10px #857E7B;
    cursor: pointer;
    &:nth-child(4){
      background-color: #05F140;
      p{
        color: #FFF
      }
      img{
        background-color: #FFF;
        border-radius: .5em
      }
    }
  }
  img {
    width: 1.8rem;
    margin: 0 1em;
  }
  p {
    color: #ccc;
    text-shadow: .1em .05em .1em #8B898A;
    &:hover{
      color: #FFF
    }
  }
`;
export const ContainerPlay = styled.div`
  width: 20vw;
  height: 65vh;
  background-color: #1A181B;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #1A181B;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #05F140;
    border-radius: 20px;
    border: 3px solid #1A181B;
  }
  p {
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size: .9em;
    color: #FFF;
    padding: .5em 1em;
    cursor: pointer;
  }
`;
export const ShowPlaylists = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 1.5em;
    cursor: pointer;
  }
`;
export const ShowInput = styled.div`
  display:flex;
  align-items: stretch;
  width: 100%;
  input {
    width: 80%;
    padding: 1em;
    ${(props) => ( props.input ? '' : 'visibility: hidden' )};
  }
  button {
    width:20%;
    ${(props) => ( props.button ? '' : 'visibility: hidden' )};
  }
`;
export const ContainerMain = styled.div`
  height: 25vh;
  width: 80vw;
  background: linear-gradient(#49434C, #1A181B);
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 2em;
  input {
    visibility: ${(props) => ( props.visibility ? '' : 'hidden' )};
    width: 30%;
    padding: .5em;
    border-radius: 1em;
    border: 0;
  }
`;
export const ContainerScreen = styled.div`
  height: 65vh;
  width: 80vw;
  background-color: #1A181B;
`;

// -- Pages Area -- //

export const WhiteP = styled.p`
  color: #FFF;
  padding-top: 5vh;
  padding-bottom: 2vh;
  font-size: 1.5em;
`;

export const MusicTable = styled.div`
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.15em;
  height: 55vh;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #1A181B;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #05F140;
    border-radius: 20px;
    border: 3px solid #1A181B;
  }
  td{
  }
  td:nth-child(1){
    width: 20em;
    height: 2em;
    border-bottom: 1px solid #FFF;
    p{
      width: 8em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
      &:nth-child(1){
        font-size: 1.5em;
        color: #05F140;
      }
    }
  }
  td:nth-child(2){
    text-align: center;
    width: 20em;
    height: 2em;
    border-bottom: 1px solid #FFF;
  }
  td:nth-child(3){
    width: 4em;
    height: 2em;
    border-bottom: 1px solid #FFF;
    text-align: center;
    img {
      width: 1.5em;
      cursor: pointer;
    }
  }
  tr:nth-child(1){
    position: sticky;
    top: 0;
    background-color: #1A181B;
  }
`;

export const ContainerTrack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
  color: #FFF;
  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
    input {
      text-align: center;
      color: #FFF;
      width: 20vw;
      padding: .5em;
      border: none;
      background-color: #1A181B;
      border-bottom: 2px solid #FFF;
      &::placeholder{
        color: #FFF;
        text-align: center;
      }
      &:focus{
        outline: 0;
        border-bottom: 2px solid #05F140;
      }
    }
    button {
      width: 7.5vw;
      padding: .3em;
      margin: 0 auto;
      transition: all 0.5s;
      cursor: pointer;
      background: #05F140;
      border: 0;
      border-radius: .5em;
      &:hover{
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
    }
  }
`;
export const ContainerHome = styled.div`
  height: 65vh;
  width: 80vw;
  color: #FFF;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-indent: .2em;
  gap: 1em;
  text-shadow: 1px 1px 1px #666;
  text-overflow: clip;
  div{
    width: 50vw;
  }
  h1, h2{
    width: 50%;
    text-align: left;
  }
  h1 {
    color: #05F140;
  }
  h2{
    text-decoration: underline solid .12em #05F140;
  }
`;
export const ContainerFooter = styled.div`
  width: 100%;
  height: 10vh;
  background: #1A181B;
  border-top: .1em solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    cursor: pointer;
  }
  span{
    margin-left: -10vw;
  }
  span:nth-child(1){
    height: 2%;
    background: #FFF;
    position: relative;
  }
  span:nth-child(2){
    position: absolute;
    height: .5%;
    background-color: #FFF;
    animation: progress-animation 10s infinite;
  }
  @keyframes progress-animation{
    0% { width: 0%; }  
    100% { width: 40% }
  }
`;
