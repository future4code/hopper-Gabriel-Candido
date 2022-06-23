import axios from "axios";

const aluno = "gabriel-candido-hopper"
const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}`
const countriesUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/paises"

export const getCountries = async () => {
  try {
    const { data } = await axios.get(countriesUrl)
    return data
  } catch (err) {
    console.log(err.response.data.message)
  }
}

export const getTrips = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/trips`)
    return data.trips;
  } catch (err) {
    console.log(err.response.data.message);
  }
}

export const applyToTrip = async (id, body, clear) => {
  try {
    const { data } = await axios.post(`${baseUrl}/trips/${id}/apply`, body)
    console.log(data)
  } catch (err) {
    alert(err.response.data.message);
  } finally {
    clear()
  }
}

export const login = async (body,clear, navigate) => {
  try {
    const { data } = await axios.post(`${baseUrl}/login`, body)
    localStorage.setItem("token", data.token)
    navigate("/admin/trips/list")
  } catch (err) {
    alert(err.response.data.message);
  } finally {
    clear()
  }
}