'use client'

import { TPost } from '@/models'
import { StatusButton } from '../ui/button/status-button'
import { deletePost } from '@/lib/actions/post'

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
