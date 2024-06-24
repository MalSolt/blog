'use client'

import { deletePost } from '@/app/lib/actions'
import { TPost } from '@/app/models'
import { StatusButton } from '../button/status-button'

type Props = {
  id: TPost['id']
}

export const DeletePost = ({ id }: Props) => {
  const handleDeletePost = async () => {
    const response = await deletePost(id)
  }

  return (
    <form action={handleDeletePost}>
      <StatusButton>Delete Post</StatusButton>
    </form>
  )
}
