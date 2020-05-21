import { auth } from '../../Firebase'

export default function useLogin() {
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

  return { login, resetPassword }
}
