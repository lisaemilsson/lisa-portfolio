import { Router } from './router'
import './App.css'
import { Layout, HomePage } from './components'
import { AlertProvider } from './context/AlerctContext'
import { useEffect } from 'react'

function App() {
  return (
    <AlertProvider>
      <Layout>
        <Router />
      </Layout>
    </AlertProvider>
  )
}

export default App
