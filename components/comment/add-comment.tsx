'use client'

import { TPost } from '@/models'
import { useRef } from 'react'
import { StatusButton } from '../ui/button/status-button'
import { addComment } from '@/lib/actions/comment'
import { Textarea } from '../ui/form/textarea'

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
      <Textarea placeholder='enter your message here' id='text' name='text' />
      <StatusButton>Submit</StatusButton>
    </form>
  )
}
