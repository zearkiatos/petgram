import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyles } from './shared/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Context } from './Context'

const Favorite = React.lazy(() => import('./Pages/Favorite'))
const User = React.lazy(() => import('./Pages/User'))
const Home = React.lazy(() => import('./Pages/Home'))
const Detail = React.lazy(() => import('./Pages/Detail'))
const NotRegisterUser = React.lazy(() => import('./Pages/NotRegisterUser'))
const NotFound = React.lazy(() => import('./Pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
