import React from 'react'
import { useFormStatus } from 'react-dom'

export const AddCommentButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      type='submit'
      className='rounded bg-primary w-full h-10 hover:bg-primary-dark transition-colors duration-300'
    >
      {pending ? 'Loading...' : 'Submit'}
    </button>
  )
}
