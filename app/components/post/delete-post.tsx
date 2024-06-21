'use client'

import { deletePost } from '@/app/lib/actions'
import { TPost } from '@/app/models'
import { useFormStatus } from 'react-dom'

type Props = {
  id: TPost['id']
}

export const DeletePost = ({ id }: Props) => {
  const { pending } = useFormStatus()

  const handleDeletePost = async () => {
    const response = await deletePost(id)
  }

  return (
    <button
      className='rounded h-10 w-full bg-red-500 hover:bg-red-700 transition-colors duration-300'
      onClick={handleDeletePost}
    >
      {pending ? 'Deleting... ' : 'Delete Post'}
    </button>
  )
}
