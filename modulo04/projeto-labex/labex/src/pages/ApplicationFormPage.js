import Button from "../components/Button";
import { ContainerAFP } from "../components/Styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useGetCountries from "../hooks/useGetCountries";
import useGetTrip from "../hooks/useGetTrip";
import useInputs from "../hooks/useInputs";

const ApplicationFormPage = () => {

  const {data:countries} = useGetCountries();
  const {data:trips} = useGetTrip();
  const {data:input, handleData:handleInput} = useInputs();
  const navigate = useNavigate();

  return (
    <ContainerAFP>
      <h1>Candidatar-se</h1>
      <Button click={() => navigate("/trips/list")} text={"Voltar"}/>
      <form >

        <select onChange={handleInput} value={input.id} name="id" required={true}>
          <option value="">Viagem</option>
          {trips.map((trip) => (
            <option key={trip.id} value={trip.id}>{trip.name}</option>
          ))}
        </select>

        <input 
          name="person" 
          placeholder="Nome" 
          onChange={handleInput} 
          value={input.person}
          minLength="3"
          required={true}
        />

        <input 
          name="text" 
          placeholder="Mensagem" 
          onChange={handleInput} 
          value={input.text} 
          minLength="15"
          required={true}
        />

        <input 
          name="profession" 
          placeholder="Profissão" 
          onChange={handleInput} 
          value={input.profession}
          minLength="5"
          required={true}
        />

        <select onChange={handleInput} value={input.country} name="country" required={true}>
          <option value="">País</option>
          {countries.map((country, index) => (
            <option key={index} value={country.nome}>{country.nome}</option>
          ))}
        </select>

        <Button text="Candidatar-se"/>

      </form>
    </ContainerAFP>
  )
};

export default ApplicationFormPage;
