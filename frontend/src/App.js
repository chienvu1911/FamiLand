import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './components/pages/HomePage'
import ProductPage from './components/pages/ProductPage'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
      <Container>
        <Route path='/' component={HomePage} exact />
        <Route path='/product/:id' component={ProductPage} />
      </Container>
      
      </main>
      <Footer />
    </Router>
  )
}

export default App
