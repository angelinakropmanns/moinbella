import React, { useState } from 'react'
import { db } from '../Firebase'
import styled from 'styled-components/macro'
import Headline from '../components/Headline/Headline'
import SubmitButton from '../components/SubmitButton/SubmitButton'

export default function CreatePlacePage() {
  const [place, setPlace] = useState({
    name: '',
    safety: '',
    lat: '',
    long: '',
    ground: '',
    size: '',
    public_transport: '',
  })

  return (
    <main>
      <Headline>Hundeplatz hinzufügen</Headline>
      <FormStyled onSubmit={handleSubmit}>
        <label htmlFor="name">Name des Hundeplatzes*:</label>
        <InputStyled
          id="name"
          name="name"
          type="text"
          value={place.name}
          onChange={handleChange}
          placeholder="Der Name des Hundeplatzes"
          required
        />
        <label htmlFor="safety">Sicherheitsvorkehrungen*:</label>
        <InputStyled
          id="safety"
          name="safety"
          type="text"
          value={place.safety}
          onChange={handleChange}
          placeholder="Ist der Hundeplatz z.B. eingezäunt?"
          required
        />
        <label htmlFor="lat">Breitengrad (Latitude)*:</label>
        <InputStyled
          id="lat"
          name="lat"
          type="number"
          value={place.lat}
          onChange={handleChange}
          placeholder="Bitte gib den genauen Breitengrad an"
          required
        />
        <label htmlFor="long">Längengrad (Longitude)*:</label>
        <InputStyled
          id="long"
          name="long"
          type="number"
          value={place.long}
          onChange={handleChange}
          placeholder="Bitte gib den genauen Längengrad an"
          required
        />
        <label htmlFor="ground">Bodenbeschaffenheit:</label>
        <InputStyled
          id="ground"
          name="ground"
          type="text"
          value={place.ground}
          onChange={handleChange}
          placeholder="z.B. Gras"
        />
        <label htmlFor="size">Größe in qm:</label>
        <InputStyled
          id="size"
          name="size"
          type="number"
          value={place.size}
          onChange={handleChange}
          placeholder="z.B. 1000"
        />
        <label htmlFor="public_transport">Öffentlicher Nahverkehr:</label>
        <InputStyled
          id="public_transport"
          name="public_transport"
          type="text"
          value={place.public_transport}
          onChange={handleChange}
          placeholder="Bitte gib an, mit welchen öffentlichen Verkehrsmitteln der Hundeplatz erreichbar ist"
        />
        <SubmitButton>Eintragen</SubmitButton>
      </FormStyled>
      <TextStyled>*Pflichtfelder</TextStyled>
    </main>
  )

  function handleSubmit(event) {
    event.preventDefault()
    db.collection('dogplaces').add(place)
    setPlace({
      name: '',
      safety: '',
      lat: '',
      long: '',
      ground: '',
      size: '',
      public_transport: '',
    })
  }
  function handleChange(event) {
    setPlace({ ...place, [event.target.name]: event.target.value })
  }
}

const FormStyled = styled.form`
  text-align: left;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`

const InputStyled = styled.input`
  height: 32px;
  width: 360px;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin-top: 12px;
  margin-bottom: 12px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  background-color: #d8f7fc;
  color: #353b40;
`

const TextStyled = styled.p`
  font-size: 12px;
`
