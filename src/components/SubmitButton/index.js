import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, onClick, disabled = false }) => <Button onClick={onClick} disabled={disabled}>{children}</Button>
