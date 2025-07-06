import React, { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import LandingPage from './components/LandingPage'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-shiksha-bg">
      {isLoading ? <LoadingScreen /> : <LandingPage />}
    </div>
  )
}

export default App