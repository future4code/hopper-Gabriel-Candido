import axios from "axios";

const aluno = "gabriel-candido-hopper"
const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}`
const countriesUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/paises"

export const getCountries = async () => {
  try {
    const { data } = await axios.get(countriesUrl)
    return data
  } catch (err) {
    console.log(err.response)
  }
}

export const getTrips = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/trips`)
    return data.trips;
  } catch (err) {
    console.log(err.response);
  }
}