'use client'

import { TPost } from '@/app/models'
import { useRef } from 'react'
import { addComment } from '../../lib/actions'
import { StatusButton } from '../button/status-button'

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
        className='text-slate-950 rounded border-2 border-inherit w-full px-2'
      />
      <StatusButton>Submit</StatusButton>
    </form>
  )
}
