import { UserRole } from '@prisma/client'
import { DeletePost } from './delete-post'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/auth'
import { LikePost } from './like-post'
import { TPost } from '@/app/models'
import { Content } from './content'
import { Title } from './title'
import { Comments } from './comments'
import { AddComment } from './add-comment'

export const Post = async ({
  id,
  title,
  content,
  author,
  authorId,
  likedBy,
  comments,
}: TPost) => {
  const session = await getServerSession(authOptions)
  const isLikedByMe = likedBy.some((e) => e.email === session?.user.email)
  const isMyPost = session?.user.id === authorId
  const isAdmin = session?.user.role === UserRole.ADMIN
  const canDelete = isMyPost || isAdmin

  return (
    <div className='rounded border-2 border-inherit w-1/2'>
      <Title text={title} />
      <Content text={content} />
      <Comments comments={comments} />
      <AddComment postId={id} />
      <div className='controllers flex px-4 py-2 gap-2'>
        <LikePost isLikedByMe={isLikedByMe} id={id} likesNumber={likedBy.length} />
        {canDelete && <DeletePost id={id} />}
      </div>
    </div>
  )
}
