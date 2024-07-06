'use client'

import { deleteComment } from '@/lib/actions/comment'
import { TComment } from '@/models'
import { StatusButton } from '../ui/button/status-button'

type Props = {
  id: TComment['id']
}

export const DeleteComment = ({ id }: Props) => {
  const handleDeletePost = async () => {
    const response = await deleteComment(id)
  }

  return (
    <form action={handleDeletePost}>
      <StatusButton>Delete Comment</StatusButton>
    </form>
  )
}
