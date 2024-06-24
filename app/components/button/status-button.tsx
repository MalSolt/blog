import React, { ButtonHTMLAttributes } from 'react'
import { useFormStatus } from 'react-dom'
import { Button, ButtonProps } from './button'

export const StatusButton = ({ children, ...rest }: ButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button {...rest} disabled={pending} type='submit'>
      {pending ? 'processing...' : children}
    </Button>
  )
}
