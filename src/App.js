import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from './shared/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
import { Favorite } from './Pages/Favorite'
import { User } from './Pages/User'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { NavBar } from './components/NavBar'
import Context from './Context'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favorite path='/favorite' />
                <User path='/user' />
                </Router>
              : <Router>
                <NotRegisterUser path='/favorite' />
                <NotRegisterUser path='/user' />
                </Router>
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
