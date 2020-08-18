import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyles } from './shared/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
import { Favorite } from './Pages/Favorite'
import { User } from './Pages/User'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { NotFound } from './Pages/NotFound'
import { NavBar } from './components/NavBar'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {
          !isAuth && <NotRegisterUser path='/login' />
        }
        {
          !isAuth && <Redirect noThrow from='/favorite' to='/login' />
        }
        {
          !isAuth && <Redirect noThrow from='/user' to='/login' />
        }
        {
          isAuth && <Redirect noThrow from='/login' to='/' />
        }
        <Favorite path='/favorite' />
        <User path='/user' />
      </Router>
      <NavBar />
    </div>
  )
}
