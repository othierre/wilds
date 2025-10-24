import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Inicializar Firebase apenas se as credenciais estiverem configuradas
let app
let auth
let db
let storage
let googleProvider

try {
  if (firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig)
    auth = getAuth(app)
    db = getFirestore(app)
    storage = getStorage(app)
    googleProvider = new GoogleAuthProvider()
  } else {
    console.warn('Firebase não configurado. Configure as variáveis de ambiente.')
  }
} catch (error) {
  console.error('Erro ao inicializar Firebase:', error)
}

export { auth, db, storage, googleProvider }
export default app

