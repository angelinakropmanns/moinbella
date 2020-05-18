import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCdmLaP1W7OAjRvhFmjgKLhO6YVsEvFGfI',
  authDomain: 'moinbella-f6a5b.firebaseapp.com',
  databaseURL: 'https://moinbella-f6a5b.firebaseio.com',
  projectId: 'moinbella-f6a5b',
  storageBucket: 'moinbella-f6a5b.appspot.com',
  messagingSenderId: '591703016233',
  appId: '1:591703016233:web:be8a4ff98387aaa2a1ed38',
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()
