import Button from "../components/Button"
import { ContainerCreateTrip } from "../components/Styles"
import { planetList } from "../services/Planets"
import { createTrip } from "../services/ApiRequest"

import useProtectedPage from "../hooks/useProtectedPage"
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom"

const CreateTripPage = () => {
  useProtectedPage()

  const navigate = useNavigate()
  const {form, handleInputChange, clear} = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    duration: ''
  });

  const handleCreate = async () => {
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.duration
    }
    await createTrip(body, clear)
  }

  return (
    <ContainerCreateTrip>
      <h1>Criar Viagem</h1>
      <form onSubmit={handleCreate}>
        <input 
          type="text" 
          placeholder="Nome" 
          name="name" 
          onChange={handleInputChange} 
          value={form.name}
          required
        />
        <select name="planet" onChange={handleInputChange} value={form.planet} required>
          <option value="">Escolha um planeta</option>
          {planetList.map((planet) => (
            <option key={planet.id} value={planet.nome}>{planet.nome}</option>
          ))}
        </select>
        <input 
          type="date" 
          name="date" 
          onChange={handleInputChange} 
          value={form.date}
          required 
        />
        <input 
          type="text" 
          placeholder="Descrição" 
          name="description" 
          onChange={handleInputChange} 
          value={form.description}
          required
        />
        <input 
          type="text" 
          placeholder="Duração em dias" 
          name="duration" 
          onChange={handleInputChange} 
          value={form.duration}
          required
        />
        <div>
          <Button click={() => navigate("/admin/trips/list")} type={'button'} text={"Voltar"} />
          <Button type={'submit'} text={"Criar"} />
        </div>
      </form>
    </ContainerCreateTrip>
  )
}

export default CreateTripPage