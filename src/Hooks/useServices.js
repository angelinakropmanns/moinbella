import { db, auth } from '../Firebase'
import { useState } from 'react'

export default function useServices() {
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    id: '',
  })
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
    return db.collection('registrations').doc(user.uid).set({
      id: user.uid,
      email: user.email,
    })
  }
  async function login({ email, password }) {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password)
      return res
    } catch (error) {
      return error
    }
  }
  function resetPassword({ email }) {
    auth.sendPasswordResetEmail(email)
  }

  return { signUp, login, resetPassword, profile, setProfile }
}
