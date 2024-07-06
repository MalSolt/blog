'use client'
import { TComment } from '@/models'
import { likeComment } from '@/lib/actions/comment'
import { FcLike } from 'react-icons/fc'
import { FcLikePlaceholder } from 'react-icons/fc'

type Props = {
  id: TComment['id']
  isLikedByMe: boolean
  likesNumber: number
}

export const LikeComment = ({ id, isLikedByMe, likesNumber }: Props) => {
  const handleLikeComment = () => likeComment(id)

  const Icon = isLikedByMe ? FcLike : FcLikePlaceholder

  return (
    <div>
      <Icon
        className='cursor-pointer hover:scale-125 duration-300 relative'
        onClick={handleLikeComment}
      />
      {likesNumber}
    </div>
  )
}
