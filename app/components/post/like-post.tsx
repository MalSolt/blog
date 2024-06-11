'use client'
import { Post } from '@prisma/client'
import { likePost } from '@/app/lib/actions'
import { FcLike } from 'react-icons/fc'
import { FcLikePlaceholder } from 'react-icons/fc'

type Props = {
  id: Post['id']
  isLikedByMe: boolean
  likesNumber: number
}

export const LikePost = ({ id, isLikedByMe, likesNumber }: Props) => {
  const handleLikePost = () => likePost(id)

  const Icon = isLikedByMe ? FcLike : FcLikePlaceholder

  return (
    <div>
      <Icon
        className='cursor-pointer hover:scale-125 duration-300 relative'
        onClick={handleLikePost}
      />
      {likesNumber}
    </div>
  )
}
