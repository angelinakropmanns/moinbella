import { useState } from 'react'
import { db, auth, storage } from '../../Firebase'

export default function useSignUp() {
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
  async function signUp({ email, password }) {
    let res
    try {
      res = await auth.createUserWithEmailAndPassword(email, password)
    } catch (error) {}
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

  return {
    handleImageUpload,
    signUp,
    userData,
    setUserData,
    previewImage,
    setPreviewImage,
  }
}
