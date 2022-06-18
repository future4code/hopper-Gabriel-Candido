import axios from "axios";

const aluno = "gabriel-candido-hopper"
const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}`

export const getTrips = async () => {
  try{
    const { data } = await axios.get(`${baseUrl}/trips`)
    return data.trips;
  }catch (error){
    console.log(error.response);
  }
}