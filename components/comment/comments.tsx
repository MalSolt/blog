import { authOptions } from '@/lib/auth'
import { TComment } from '@/models'
import clsx from 'clsx'
import { getServerSession } from 'next-auth'
import { Comment } from './comment'

type Props = {
  comments: TComment[]
}

export const Comments = async ({ comments }: Props) => {
  const session = await getServerSession(authOptions)

  return (
    <div className='border-t border-b border-inherit mt-4 px-4 py-2'>
      <h3 className='text-primary-light'>Commnet</h3>
      <div className='flex flex-col gap-2 py-2 px-4'>
        {comments.map((comment) => {
          const isMyComment = session?.user.id === comment.authorId
          return <Comment key={comment.id} {...comment} isMyComment={isMyComment} />
        })}
      </div>
    </div>
  )
}
