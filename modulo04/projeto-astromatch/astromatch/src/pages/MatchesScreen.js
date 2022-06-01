import React, { useState, useEffect } from 'react'
import { getMatches } from '../services/ApiRequest'
import { ContainerChat } from '../components/Style.js'
import Return from '../assets/return.svg'
import AstroMatch from "../assets/AstroMatch.png"

const MatchesScreen = (props) => {

  const [matchs, setMatchs] = useState([])

  useEffect(() => {
    handleGetMatches()
  }, [])

  const handleGetMatches = async () => {
    const response = await getMatches()
    setMatchs(response.matches)
  }

  return (
    <ContainerChat>
      <div>
        <img onClick={() => props.Matches('Initial')} src={Return} alt="Ícone clicavel para voltar a página de Matches" />
        <img src={AstroMatch} alt="Logo do Astromatch"></img>
      </div>
      <ul>
      {matchs.map((person) => {
        return (
          <li  key={person.id}>
            <img src={person.photo} alt={person.photo_alt} />
            <p>{person.name}</p>
          </li>
        )
      })}
      </ul>
    </ContainerChat>
  )
}

export default MatchesScreen