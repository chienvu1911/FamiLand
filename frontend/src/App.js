import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './components/pages/HomePage'

const App = () => {
  return (
    <div>
      <Header />
      <main>
      <Container>
         <HomePage />
      </Container>
      
      </main>
      <Footer />
    </div>
  )
}

export default App
