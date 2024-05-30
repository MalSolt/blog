import { User, UserRole } from '@prisma/client'
import { DeletePost } from './delete-post'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import { LikePost } from './like-post'
import { PostWithLikesAndAuthor } from '@/app/models'

export const Post = async ({
  id,
  title,
  content,
  author,
  authorId,
  published,
  likedBy,
}: PostWithLikesAndAuthor) => {
  const session = await getServerSession(authOptions)
  const isLikedByMe = likedBy.some((e) => e.email === session?.user.email)
  const canDelete = session?.user.id === authorId || session?.user.role === 'ADMIN'
  const likesNumber = likedBy.length

  return (
    <div className='rounded border-2 p-4 border-inherit w-1/2'>
      <h3>{author.name}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      {canDelete && <DeletePost id={id} />}
      <br />
      <LikePost isLikedByMe={isLikedByMe} id={id} />
      {likedBy.length}
    </div>
  )
}
