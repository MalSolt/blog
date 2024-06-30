'use client'

import { TPost } from '@/models'
import { useRef } from 'react'
import { StatusButton } from '../ui/button/status-button'
import { addComment } from '@/lib/actions'

type Props = {
  postId: TPost['id']
}

export const AddComment = ({ postId }: Props) => {
  const ref = useRef<HTMLFormElement>(null)

  const handleAddComment = async (formData: FormData) => {
    const response = await addComment(formData, postId)
    if (response?.message) {
      alert(response.message)
    }
    ref.current?.reset()
  }

  return (
    <form ref={ref} action={handleAddComment}>
      <textarea
        placeholder='enter your message here'
        rows={3}
        id='text'
        name='text'
        className='rounded border-2 border-inherit w-full px-2'
      />
      <StatusButton>Submit</StatusButton>
    </form>
  )
}
