import React, { useState, useEffect } from "react";
import { ContainerMatches, Buttons } from "../components/Style"
import User from '../assets/user.svg'
import AstroMatch from "../assets/AstroMatch.png"
import { getProfileToChoose, choosePerson, clearMatches } from "../services/ApiRequest"

function InitialScreen (props) {

  const [infos, setInfos] = useState([])
  const [choice, setChoice] = useState(null)

  useEffect(() => {
    handleGetProfileToChoose()
  }, [])

  const deslike = () => {
    setChoice(false)
    handleChoosePerson()
    handleGetProfileToChoose()
  }
  const like = () => {
    setChoice(true)
    handleChoosePerson()
    handleGetProfileToChoose()
  }
  const reset = () => {
    handleClearMatches()
    handleGetProfileToChoose()
  }

  const handleGetProfileToChoose = async () => {
    const response = await getProfileToChoose()
    setInfos(Object.values(response))
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
      
        {infos.map((person) => {
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
        })}
      
      <Buttons>
        <p onClick={deslike}>X</p>
        <p onClick={reset}> Reset </p>
        <p onClick={like}>♥</p>
      </Buttons>
    </ContainerMatches>
  )
}

export default InitialScreen;
