import { User, Post as TPost, UserRole } from '@prisma/client'
import { DeletePost } from './delete-post'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

type Props = { authorName: User['name'] } & TPost

export const Post = async ({ id, title, content, authorName, authorId, published }: Props) => {
  const session = await getServerSession(authOptions)
  const userRole = session?.user.role
  const userId = session?.user.id


  return (
    <div className='rounded border-2 p-4 border-inherit w-1/2'>
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      {(userId === authorId || userRole === 'ADMIN') && <DeletePost id={id} />}
    </div>
  )
}
