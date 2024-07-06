import React from 'react'
import { TComment } from '@/models'
import clsx from 'clsx'
import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { DeleteComment } from './delete-comment'
import { LikeComment } from './like-comment'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

type Props = {
  isMyComment: boolean
} & TComment

export const Comment = async ({ isMyComment, id, text, likedBy }: Props) => {
  const session = await getServerSession(authOptions)
  const isLikedByMe = likedBy.some((e) => e.email === session?.user.email)

  return (
    <div className={cn({ 'text-secondary': isMyComment })}>
      <Popover>
        <PopoverTrigger>{text}</PopoverTrigger>
        <PopoverContent>
          <DeleteComment id={id} />
        </PopoverContent>
      </Popover>
      <LikeComment id={id} isLikedByMe={isLikedByMe} likesNumber={likedBy.length} />
    </div>
  )
}
