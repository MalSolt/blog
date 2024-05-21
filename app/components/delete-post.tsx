'use client'
import { Post } from '@prisma/client'
import { deletePost } from '@/app/lib/actions'

export const DeletePost = ({ id }: { id: Post['id'] }) => {
  const handleDeletePost = () => deletePost(id)

  return <button onClick={handleDeletePost}>Delete Post</button>
}
