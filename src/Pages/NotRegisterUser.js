import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'

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
                const errorMessage = error && '⛔ The user already exist or something was wrong.'
                return <UserForm onSubmit={onSubmit} title='Register' error={errorMessage} disabled={loading} />
              }
            }
          </RegisterMutation>
          <LoginMutation>
            {
              (login, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  login({ variables }).then(activateAuth)
                }
                const errorMessage = error && '⛔ The user not exist or Something was wrong.'
                return <UserForm onSubmit={onSubmit} title='Log In' error={errorMessage} disabled={loading} />
              }
            }
          </LoginMutation>
        </>
      }
    }
  </Context.Consumer>
)
