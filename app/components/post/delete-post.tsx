'use client'
import { Post } from '@prisma/client'
import { deletePost } from '@/app/lib/actions'

export const DeletePost = ({ id }: { id: Post['id'] }) => {
  const handleDeletePost = () => deletePost(id)

  return <button className='rounded h-10 w-full bg-red-500 hover:bg-red-700 transition-colors duration-300' onClick={handleDeletePost}>Delete Post</button>
}
    