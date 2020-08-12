import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }
                const errorMessage = error && 'The user already exist or something was wrong.'
                return <UserForm onSubmit={onSubmit} title='Register' error={errorMessage} disabled={loading} />
              }
            }
          </RegisterMutation>

          <UserForm onSubmit={activateAuth} title='Log In' />
        </>
      }
    }
  </Context.Consumer>
)
