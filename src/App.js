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

const UserLogged = ({ children }) => {
  return children({
    isAuth: false
  })
}
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
      <UserLogged>
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
      </UserLogged>
      <NavBar />
    </div>
  )
}
