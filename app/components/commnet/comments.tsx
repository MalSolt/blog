import { authOptions } from '@/app/lib/auth'
import { TPost } from '@/app/models'
import clsx from 'clsx'
import { getServerSession } from 'next-auth'

type Props = {
  comments: TPost['comments']
}

export const Comments = async ({ comments }: Props) => {
  const session = await getServerSession(authOptions)

  return (
    <div className='border-t border-b border-inherit mt-4 px-4 py-2'>
      <h3 className='text-primary-light'>Commnet</h3>
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
    </div>
  )
}
