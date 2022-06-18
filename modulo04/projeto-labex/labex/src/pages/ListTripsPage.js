import { getTrips } from "../services/ApiRequest"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { useState, useEffect } from "react"
import { ContainerListTP } from "../components/Styles"

const ListTripsPage = () => {

  const navigate = useNavigate()
  const [ trips, setTrips ] = useState([])

  useEffect(() => {
    handleGetTrips()
  }, [])

  const handleGetTrips = async () => {
    const response = await getTrips()
    setTrips(response)
  }
  
  return (
    <ContainerListTP>
      <h1>Trips List</h1>
      <div>
        <Button click={() => navigate("/")} text={"Voltar"}/>
        <Button text={"Inscrever-se"}/>
      </div>
      {trips && trips.map((trip) => (
        <ul key={trip.id}>
          <li><strong>Nome:</strong>{trip.name}</li>
          <li><strong>Descrição:</strong>{trip.description}</li>
          <li><strong>Planeta:</strong>{trip.planet}</li>
          <li><strong>Duração:</strong>{trip.durationInDays}</li>
          <li><strong>Data:</strong>{trip.date}</li>
        </ul>
      ))}
    </ContainerListTP>
  )
}

export default ListTripsPage