import React, { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import { ContainerMatches, Buttons } from "../components/Style"
import User from '../assets/user.svg'
import AstroMatch from "../assets/AstroMatch.png"
import { getProfileToChoose, choosePerson, clearMatches } from "../services/ApiRequest"

function InitialScreen (props) {

  const [infos, setInfos] = useState([])
  const [choice, setChoice] = useState(undefined)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetProfileToChoose()
  }, [])

  const deslikeLike = (param) => {
    setChoice(param)
    handleChoosePerson()
    handleGetProfileToChoose()
  }
  
  const reset = () => {
    handleClearMatches()
    handleGetProfileToChoose()
  }

  const handleGetProfileToChoose = async () => {
    setLoading(true);
    const response = await getProfileToChoose()
    setInfos(Object.values(response))
    setLoading(false);
  }
  const handleChoosePerson = async () => {
    const id = infos.map(id => id.id)
    await choosePerson(id.join(), choice)
  }
  const handleClearMatches = async () => {
    await clearMatches()
  }

  return(
    <ContainerMatches>
      <div>
        <img src={AstroMatch} alt="Logo do Astromatch"></img>
        <img onClick={() => props.Chat('Chat')} src={User} alt="Ícone clicável para visualização de matchs"/>
      </div>
      
        {loading ? (
        <FadeLoader />
      ) : (
        infos.map((person) => {
          return(
            <div key={person.id}>
              <img src={person.photo} alt={person.photo_alt} />
              <img src={person.photo} alt={person.photo_alt} />
                
              <div>
                <h1>{person.name}, {person.age}</h1>
                <p>{person.bio}</p>
              </div>
            </div>
          )
        }))}
      
      <Buttons>
        <p onClick={() => deslikeLike(false)}>X</p>
        <p onClick={reset}> Reset </p>
        <p onClick={() => deslikeLike(true)}>♥</p>
      </Buttons>
    </ContainerMatches>
  )
}

export default InitialScreen;
