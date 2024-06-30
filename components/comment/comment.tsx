import React from 'react'
import { TComment } from '@/models'
import clsx from 'clsx'
import { cn } from '@/lib/utils'

type Props = {
  isMyComment: boolean
} & TComment

export const Comment = ({ isMyComment, id, text }: Props) => {
  return <div className={cn({ 'text-secondary': isMyComment })}>{text}</div>
}
