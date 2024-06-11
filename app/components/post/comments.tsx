import { PostWithRelatedData } from '@/app/models'
import { addComment } from '../../lib/actions'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/auth'
import clsx from 'clsx'

type Props = {
  comments: PostWithRelatedData['comments']
  postId: PostWithRelatedData['id']
}

export const Comments = async ({ comments, postId }: Props) => {
  const session = await getServerSession(authOptions)

  return (
    <div className='border-t border-b border-inherit mt-4 px-4 py-2'>
      <h1 className='text-primary-light'>Commnet</h1>
      <div className='flex flex-col gap-2 py-2 px-4'>
        {comments.map((commnet) => {
          const isMyCommnet = session?.user.id === commnet.authorId
          return (
            <div className={clsx({ 'text-secondary': isMyCommnet })} key={commnet.id}>
              {commnet.text}
            </div>
          )
        })}
      </div>
      <form action={addComment}>
        <textarea
          rows={3}
          id='text'
          name='text'
          className='text-slate-950 rounded border-2 border-inherit w-full px-2'
        />
        <input
          type='text'
          id='postId'
          name='postId'
          value={postId}
          className='text-slate-950 rounded border-2 border-inherit hidden'
        />
        <button type='submit' className='rounded bg-primary w-full h-10 hover:bg-primary-dark transition-colors duration-300'>
          Submit
        </button>
      </form>
    </div>
  )
}
