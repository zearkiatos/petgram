import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error, FormContainer } from './styles'
import { SubmitButton } from '../SubmitButton'
export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input placeholder='Email' {...email} disabled={disabled} />
        <Input placeholder='Password' type='password' {...password} disabled={disabled} />
        <SubmitButton type='submit' disabled={disabled}>
          {title}
        </SubmitButton>
        {error && <Error> {error} </Error>}
      </Form>
    </FormContainer>
  )
}
