import React, { useEffect, useState } from 'react'
import { auth, db } from '../Firebase'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const AuthContext = React.createContext()

function AuthProvider({ setProfile, children }) {
  const [user, setUser] = useState({})
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          id: user.uid,
          email: user.email,
        })
        window.localStorage.setItem('uid', user.uid)
        getUserInformation()
      } else {
        setUser({})
        setProfile({ email: '', password: '', id: '' })
        window.localStorage.removeItem('uid')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getUserInformation() {
    db.collection('registrations')
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        return doc.exists && doc.data()
      })
      .then((data) => {
        setProfile({ ...data })
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  }

  async function logout(event) {
    try {
      event.preventDefault()
      auth.signOut()
      setUser({})
      setProfile({ email: '', password: '', id: '' })
      history.push('/')
    } catch (err) {}
  }

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthConsumer = AuthContext.Consumer

export default withRouter(AuthProvider)

export { AuthConsumer }