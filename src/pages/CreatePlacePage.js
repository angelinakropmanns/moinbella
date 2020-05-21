import React, { useState } from 'react'
import { db } from '../Firebase'
import swal from 'sweetalert'
import styled from 'styled-components/macro'
import SubmitButton from '../components/Buttons/SubmitButton/SubmitButton'

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
      <FormStyled onSubmit={handleSubmit} data-cy="create_place">
        <label htmlFor="name">Name des Hundeplatzes*:</label>
        <InputStyled
          id="name"
          name="name"
          type="text"
          value={place.name}
          onChange={handleChange}
          placeholder="Der Name des Hundeplatzes"
          required
          autoFocus
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
        <CoordinatesContainerLatStyled>
          <label htmlFor="lat">Breitengrad (Lat.)*:</label>
          <CoordinatesInputLatStyled
            id="lat"
            name="lat"
            type="number"
            value={place.lat}
            onChange={handleChange}
            placeholder="z.B. 53.56575"
            required
          />
        </CoordinatesContainerLatStyled>
        <CoordinatesContainerLongStyled>
          <label htmlFor="long">Längengrad (Long.)*:</label>
          <CoordinatesInputLongStyled
            id="long"
            name="long"
            type="number"
            value={place.long}
            onChange={handleChange}
            placeholder="z.B. 9.807627"
            required
          />
        </CoordinatesContainerLongStyled>
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
          placeholder="Wie ist der Platz erreichbar?"
        />
        <SubmitButtonStyled>
          <SubmitButton>Eintragen</SubmitButton>
        </SubmitButtonStyled>
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
    swal({
      title: 'Der Hundeplatz wurde erfolgreich angelegt!',
      text: 'Gehe zurück zur Map, um alle Hundeplätze zu sehen!',
      icon: 'success',
    })
  }
  function handleChange(event) {
    setPlace({ ...place, [event.target.name]: event.target.value })
  }
}

const FormStyled = styled.form`
  text-align: left;
  margin-top: 20px;
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  label {
    margin-left: 4px;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
`

const InputStyled = styled.input`
  height: 36px;
  width: 98%;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 12px auto 12px 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  background: var(--quaternary);
`
const CoordinatesInputLatStyled = styled.input`
  height: 36px;
  width: 96%;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 12px auto 12px 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  background: var(--quaternary);
`
const CoordinatesInputLongStyled = styled.input`
  height: 36px;
  width: 96%;
  border: 0;
  border-radius: 2px;
  padding: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 12px auto 12px 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  background: var(--quaternary);
`

const CoordinatesContainerLatStyled = styled.div`
  width: 50%;
  display: inline-block;
  label {
    display: block;
  }
`

const CoordinatesContainerLongStyled = styled.div`
  width: 50%;
  display: inline-block;
  label {
    display: block;
  }
`

const TextStyled = styled.p`
  font-size: 12px;
`

const SubmitButtonStyled = styled.span`
  display: flex;
  justify-content: center;
`
