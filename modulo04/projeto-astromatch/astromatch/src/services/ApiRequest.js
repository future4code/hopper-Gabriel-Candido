import axios from "axios";

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alunoLabenu'

export const getProfileToChoose = async () => {
  try {
    const { data } = await axios.get(`${urlBase}/person`)
    return data
  } catch (error) {
    console.log( error.response )
  }
} 

export const getMatches = async () => {
  try{
    const { data } = await axios.get(`${urlBase}/matches`)
    return data
  } catch (error) {
    console.log( error.response )
  }
}

export const choosePerson = async (idPerson, choicePerson) => {
  
  const body = {
    id: idPerson,
    choice: choicePerson
  }

  try{
    const { data } = await axios.post(`${urlBase}/choose-person`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(data)
    return data
  } catch (error) {
    console.log( error.response )
  }
}

export const clearMatches = async () => {
  try{
    const { data } = await axios.put(`${urlBase}/clear`)
    return data
  } catch (error) {
    console.log( error.response )
  }
}
