import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <UserForm onSubmit={activateAuth} title='Register' />
            <UserForm onSubmit={activateAuth} title='Log In' />
          </>
        )
      }
    }
  </Context.Consumer>
)
