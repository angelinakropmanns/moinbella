import { db, auth } from '../Firebase'
import { useState } from 'react'

export default function useServices() {
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    id: '',
  })
  function signUp({ email, password }) {
    return auth.createUserWithEmailAndPassword(email, password).then((res) => {
      addUser(res.user)
      return res
    })
  }
  function addUser(user) {
    return db.collection('registrations').doc(user.uid).set({
      id: user.uid,
      email: user.email,
    })
  }
  function login({ email, password }) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => res)
      .catch((error) => error)
  }
  function resetPassword({ email }) {
    auth.sendPasswordResetEmail(email)
  }

  return { signUp, login, resetPassword, profile, setProfile }
}
