import React, { useState } from 'react'
import { useToggle } from 'react-hooks-lib'
import { Link, useHistory } from 'react-router-dom'
import { db, auth, storage } from '../Firebase'
import styled from 'styled-components/macro'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'
import SubmitButton from '../components/SubmitButton/SubmitButton'
import PropTypes from 'prop-types'
import ImageUpload from '../components/ImageUpload'

SignUp.propTypes = {
  setProfile: PropTypes.func.isRequired,
}

export default function SignUp({ setProfile }) {
  const { register, handleSubmit, errors, setError } = useForm()
  const history = useHistory()
  const [userData, setUserData] = useState({
    name: '',
    plz: '',
    city: '',
    gender: '',
    breed: '',
    about: '',
    search: '',
  })
  const [previewImage, setPreviewImage] = useState({
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/moinbella-f6a5b.appspot.com/o/images%2Fdefault-profile-picture.png?alt=media&token=9424300e-79f8-440c-95b7-0f3b315d8962',
  })
  const { on, toggle } = useToggle(false)
  return (
    <SignUpPageStyled>
      <LinkWrapper>
        <LinkStyled to="/">Zum Login</LinkStyled>
        <LinkStyled to="/profiles">Zu den Profilen</LinkStyled>
      </LinkWrapper>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <ImageUpload
          updateImage={handleImageUpload}
          previewImage={previewImage}
        />
        <label htmlFor="name">Name*:</label>
        <InputStyled
          ref={register({ required: true })}
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Gib deinen Vornamen an"
        />
        {errors.name && errors.name.type === 'required' && (
          <p>Bitte gib deinen Namen an.</p>
        )}
        <label htmlFor="email">E-Mail*:</label>
        <InputStyled
          ref={register({ required: true })}
          type="email"
          name="email"
          placeholder="Trage deine Mail-Adresse ein"
        />
        {errors.email && errors.email.type === 'required' && (
          <p>Bitte gib eine gültige Mail-Adresse an.</p>
        )}
        {errors.email && errors.email.type === 'inUse' && (
          <p>{errors.email.message}</p>
        )}
        <label htmlFor="password">Passwort*:</label>
        <InputStyled
          ref={register({ required: true, minLength: 8 })}
          type="password"
          name="password"
          placeholder="Gib ein Passwort mit mindestens 8 Zeichen ein"
        />
        {errors.password && (
          <p>Das Passwort muss mindestens 8 Zeichen beinhalten.</p>
        )}
        <label htmlFor="plz">Postleitzahl*:</label>
        <InputStyled
          ref={register({ required: true })}
          type="text"
          name="plz"
          value={userData.plz}
          onChange={handleChange}
          placeholder="z.B. 20535"
        />
        {errors.plz && errors.plz.type === 'required' && (
          <p>
            Bitte gib deine Postleitzahl an, damit andere wissen, ob du in ihrer
            Umgebung wohnst.
          </p>
        )}
        <label htmlFor="city">Ort*:</label>
        <InputStyled
          ref={register({ required: true })}
          type="text"
          name="city"
          value={userData.city}
          onChange={handleChange}
          placeholder="z.B. Hamburg"
        />
        {errors.city && errors.city.type === 'required' && (
          <p>
            Bitte gib deinen Wohnort an, damit andere wissen, ob du in ihrer
            Umgebung wohnst.
          </p>
        )}
        <label htmlFor="gender">Geschlecht deines Hundes*:</label>
        <SelectStyled
          ref={register({ required: true })}
          name="gender"
          value={userData.gender}
          onChange={handleChange}
        >
          <option value="" selected disabled hidden>
            Wähle das Geschlecht aus
          </option>
          <option value="Weiblich">Weiblich</option>
          <option value="Männlich">Männlich</option>
        </SelectStyled>
        {errors.gender && errors.gender.type === 'required' && (
          <p>Bitte gib das Geschlecht deines Hundes an.</p>
        )}
        <label htmlFor="breed">Hunderasse*:</label>
        <InputStyled
          ref={register({ required: true })}
          type="text"
          name="breed"
          value={userData.breed}
          onChange={handleChange}
          placeholder="z.B. Bulldogge"
        />
        {errors.breed && errors.breed.type === 'required' && (
          <p>Bitte gib die Rasse deines Hundes an.</p>
        )}
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
              value={userData.about}
              onChange={handleChange}
              placeholder="Z.B. der Name deines Hundes, was ihr gerne macht..."
            />
            <label htmlFor="search">Wonach wir suchen:</label>
            <LongInputStyled
              id="search"
              name="search"
              type="text"
              value={userData.search}
              onChange={handleChange}
              placeholder="Wonach ihr sucht, z.B. regelmäßige Treffen..."
            />
          </>
        )}
        <SubmitButtonStyled>
          <SubmitButton>Registrieren</SubmitButton>
        </SubmitButtonStyled>
      </FormStyled>
      <TextStyled>*Pflichtfelder</TextStyled>
    </SignUpPageStyled>
  )

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  function handleImageUpload(event) {
    const image = event.target.files[0]
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert(
          'Das hat leider nicht funktioniert, versuche es bitte später nochmal.'
        )
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

  function onSubmit(data) {
    setProfile(data)
    signUp(data)
      .then((res) => {
        if (res.code === 'auth/email-already-in-use') {
          return setError(
            'email',
            'inUse',
            'Die eingegebene Mail-Adresse wird bereits genutzt.'
          )
        }
        setTimeout(history.pushState('/'), 3000)
      })
      .catch((error) => console.log(error))
    setPreviewImage({
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/moinbella-f6a5b.appspot.com/o/images%2Fdefault-profile-picture.png?alt=media&token=9424300e-79f8-440c-95b7-0f3b315d8962',
    })
    setUserData({
      name: '',
      plz: '',
      city: '',
      gender: '',
      breed: '',
    })
    swal({
      title: 'Registrierung erfolgreich',
      text: 'Klicke auf "Zu den Profilen" um neue Hundekontakte zu finden!',
      icon: 'success',
    })
  }

  async function signUp({ email, password }) {
    console.log('signUp')
    let res
    try {
      res = await auth.createUserWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
    await addUser(res.user)
    return res
  }

  function addUser(user) {
    return db.collection('users').doc(user.uid).set({
      image: previewImage.imageUrl,
      id: user.uid,
      name: userData.name,
      email: user.email,
      plz: userData.plz,
      city: userData.city,
      gender: userData.gender,
      breed: userData.breed,
      about: userData.about,
      search: userData.search,
    })
  }
}

const SignUpPageStyled = styled.section`
  grid-row: 2/4;
  overflow: scroll;
  margin: 12px 4px;
  height: 100%;
`

const LinkWrapper = styled.section`
  display: flex;
  justify-content: space-around;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 8px 0 20px 0;
  text-align: left;
  label {
    color: #414756;
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

const SubmitButtonStyled = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`

const TextStyled = styled.p`
  font-size: 12px;
  margin-bottom: 12px;
`

const LinkStyled = styled(Link)`
  display: flex;
  margin-top: 12px;
  color: #414756;
`
