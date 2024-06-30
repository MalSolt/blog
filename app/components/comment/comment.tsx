import React from 'react'
import { TComment } from '@/app/models'
import clsx from 'clsx'

type Props = {
  isMyComment: boolean
} & TComment

export const Comment = ({ isMyComment, id, text }: Props) => {
  return (
    <div className={clsx({ 'text-secondary': isMyComment })}>
      {text}
    </div>
  )
}
