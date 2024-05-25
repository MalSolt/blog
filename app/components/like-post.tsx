'use client'
import { Post } from '@prisma/client'
import { likePost } from '@/app/lib/actions'

type Props = {
  id: Post['id']
  isLikedByMe: boolean
}

export const LikePost = ({ id, isLikedByMe }: Props) => {
  const handleLikePost = () => likePost(id)

  return (
    <button className={isLikedByMe ? 'bg-red-600' : ''} onClick={handleLikePost}>
      Like Post
    </button>
  )
}
