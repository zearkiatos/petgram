import React from 'react'
import Context from '../Context'
export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button type='submit'>
                      Iniciar Sesión
            </button>
          </form>
        )
      }
    }
  </Context.Consumer>
)
