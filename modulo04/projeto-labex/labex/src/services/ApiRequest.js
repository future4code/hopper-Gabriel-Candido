import axios from "axios";

const aluno = "gabriel-candido-hopper"
const baseURL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}`
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
    const { data } = await axios.get(`${baseURL}/trips`)
    return data.trips;
  } catch (err) {
    console.log(err.response.data.message);
  }
}

export const applyToTrip = async (id, body, clear) => {
  try {
    const { data } = await axios.post(`${baseURL}/trips/${id}/apply`, body)
    console.log(data)
  } catch (err) {
    alert(err.response.data.message);
  } finally {
    clear()
  }
}

export const login = async (body, clear, navigate) => {
  try {
    const { data } = await axios.post(`${baseURL}/login`, body)
    localStorage.setItem("token", data.token)
    navigate("/admin/trips/list")
  } catch (err) {
    alert(err.response.data.message);
  } finally {
    clear()
  }
}

export const deleteTrip = async (id, tripName) => {
  try {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    if(window.confirm(`${tripName} será apagada para sempre, você tem certeza?`)){
      await axios.delete(`${baseURL}/trips/${id}`, headers)
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
}