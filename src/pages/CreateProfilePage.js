import React, { useState } from 'react'
import { useToggle } from 'react-hooks-lib'
import { db } from '../Firebase'
import { storage } from '../Firebase'
import swal from 'sweetalert'
import styled from 'styled-components/macro'
import Headline from '../components/Headline/Headline'
import ImageUpload from '../components/ImageUpload'
import SubmitButton from '../components/SubmitButton/SubmitButton'

export default function CreateProfilePage() {
  const [previewImage, setPreviewImage] = useState({
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/moinbella-f6a5b.appspot.com/o/images%2Fdefault-profile-picture.png?alt=media&token=9424300e-79f8-440c-95b7-0f3b315d8962',
  })
  const [user, setUser] = useState({
    name: '',
    mail: '',
    plz: '',
    city: '',
    gender: '',
    breed: '',
    about: '',
    search: '',
  })

  const { on, toggle } = useToggle(false)

  return (
    <main>
      <Headline>Profil erstellen</Headline>
      <FormStyled onSubmit={handleSubmit} data-cy="create_profile">
        <ImageUpload
          updateImage={handleImageUpload}
          previewImage={previewImage}
        />
        <label htmlFor="name">Name*:</label>

        <InputStyled
          id="name"
          name="name"
          type="text"
          value={user.name}
          onChange={handleChange}
          placeholder="Dein Name"
          required
          autoFocus
        />
        <label htmlFor="mail">E-Mail*:</label>

        <InputStyled
          id="mail"
          name="mail"
          type="email"
          value={user.mail}
          onChange={handleChange}
          placeholder="z.B. beispiel@beispiel.com"
          required
        />
        <label htmlFor="plz">Postleitzahl*:</label>

        <InputStyled
          id="plz"
          name="plz"
          type="text"
          value={user.plz}
          onChange={handleChange}
          placeholder="z.B. 20535"
          required
          minLength="5"
          maxLength="5"
        />

        <label htmlFor="city">Ort*:</label>

        <InputStyled
          id="city"
          name="city"
          type="text"
          value={user.city}
          onChange={handleChange}
          placeholder="z.B. Hamburg"
          required
        />

        <label htmlFor="gender">Geschlecht deines Hundes*:</label>

        <SelectStyled
          id="gender"
          name="gender"
          value={user.gender}
          onChange={handleChange}
          required
        >
          <option value="" selected disabled hidden>
            Wähle das Geschlecht aus
          </option>
          <option name="gender" value="Weiblich">
            Weiblich
          </option>
          <option name="gender" value="Männlich">
            Männlich
          </option>
        </SelectStyled>

        <label htmlFor="breed">Hunderasse*:</label>
        <InputStyled
          id="breed"
          name="breed"
          type="text"
          value={user.breed}
          onChange={handleChange}
          placeholder="z.B. Bulldogge"
          required
        />
        {on || (
          <FormTextStyled onClick={toggle}>
            Erweitertes Profil anlegen
          </FormTextStyled>
        )}
        {on && (
          <>
            <label htmlFor="about">Über uns:</label>
            <LongInputStyled
              id="about"
              name="about"
              type="text"
              value={user.about}
              onChange={handleChange}
              placeholder="Z.B. der Name deines Hundes, was ihr gerne macht..."
            />
            <label htmlFor="search">Wonach wir suchen:</label>
            <LongInputStyled
              id="search"
              name="search"
              type="text"
              value={user.search}
              onChange={handleChange}
              placeholder="Wonach ihr sucht, z.B. regelmäßige Treffen..."
            />
          </>
        )}
        <SubmitButtonStyled>
          <SubmitButton data-cy="create_button">Los geht's!</SubmitButton>
        </SubmitButtonStyled>
      </FormStyled>
      <TextStyled>*Pflichtfelder</TextStyled>
    </main>
  )

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  function handleImageUpload(event) {
    const image = event.target.files[0]
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert('An error occurred, please try again.')
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setPreviewImage({ imageUrl: url })
          })
      }
    )
  }
  function handleSubmit(event) {
    event.preventDefault()
    let newUser = {
      image: previewImage.imageUrl,
      name: user.name,
      mail: user.mail,
      plz: user.plz,
      city: user.city,
      gender: user.gender,
      breed: user.breed,
      about: user.about,
      search: user.search,
    }
    db.collection('users').add(newUser)
    setUser({
      name: '',
      mail: '',
      plz: '',
      city: '',
      gender: '',
      breed: '',
      about: '',
      search: '',
    })
    setPreviewImage({
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/moinbella-f6a5b.appspot.com/o/images%2Fdefault-profile-picture.png?alt=media&token=9424300e-79f8-440c-95b7-0f3b315d8962',
    })
    swal({
      title: 'Dein Profil wurde angelegt!',
      text:
        'Gehe zur Profilseite, um dein Profil zu sehen und neue Hundekontakte zu knüpfen!',
      icon: 'success',
    })
  }
}

const FormStyled = styled.form`
  text-align: left;
  margin-top: 20px;
  width: 100%;
  p {
    margin-top: 32px;
    line-height: 0;
  }
  label {
    margin-left: 4px;
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
  background-color: #d8f7fc;
  color: #353b40;
`

const SelectStyled = styled.select`
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
  background-color: #d8f7fc;
  color: #353b40;
`

const LongInputStyled = styled.textarea`
  height: 80px;
  width: 98%;
  border: 0;
  border-radius: 2px;
  padding-top: 12px;
  padding-left: 4px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 100;
  margin: 12px auto 12px 4px;
  background-color: #d8f7fc;
  color: #353b40;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
`

const FormTextStyled = styled.p`
  font-size: 14px;
  text-decoration: underline;
  text-align: center;
  margin: 0 0 16px 0;
`

const TextStyled = styled.p`
  font-size: 12px;
`

const SubmitButtonStyled = styled.span`
  display: flex;
  justify-content: center;
`
