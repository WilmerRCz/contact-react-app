import { Toaster } from 'react-hot-toast'
import Router from './Router'
import { AuthProvider } from './components/context/AuthContext'

function App () {
  return (
    <AuthProvider>
      <Router/>
      <Toaster/>
    </AuthProvider>
  )
}

export default App
