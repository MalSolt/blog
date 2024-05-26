'use client'
import { Post } from '@prisma/client'
import { likePost } from '@/app/lib/actions'
import { FcLike } from 'react-icons/fc'
import { FcLikePlaceholder } from 'react-icons/fc'

type Props = {
  id: Post['id']
  isLikedByMe: boolean
}

export const LikePost = ({ id, isLikedByMe }: Props) => {
  const handleLikePost = () => likePost(id)

  const Icon = isLikedByMe ? FcLike : FcLikePlaceholder

  return <Icon className='cursor-pointer hover:scale-125 duration-300' onClick={handleLikePost} />
}
