import { User, UserRole } from '@prisma/client'
import { DeletePost } from './delete-post'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import { LikePost } from './like-post'
import { PostWithRelatedData } from '@/app/models'
import { addComment } from '../lib/actions'

export const Post = async ({
  id,
  title,
  content,
  author,
  authorId,
  published,
  likedBy,
  comments,
}: PostWithRelatedData) => {
  const session = await getServerSession(authOptions)
  const isLikedByMe = likedBy.some((e) => e.email === session?.user.email)
  const canDelete = session?.user.id === authorId || session?.user.role === 'ADMIN'
  const likesNumber = likedBy.length

  return (
    <div className='rounded border-2 p-4 border-inherit w-1/2 '>
      <h3>{author.name}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      {canDelete && <DeletePost id={id} />}
      <br />
      <LikePost isLikedByMe={isLikedByMe} id={id} />
      {likedBy.length}
      <h1 className='text-4xl text-emerald-700'>Commnet</h1>
      {comments.map((e) => (
        <div key={e.id}>{e.text}</div>
      ))}
      <form action={addComment}>
        <input
          type='text'
          id='text'
          name='text'
          className='text-slate-950 rounded border-2 border-inherit w-1/2'
        />
        <input
          type='text'
          id='postId'
          name='postId'
          value={id}
          className='text-slate-950 rounded border-2 border-inherit w-1/2 hidden'
        />
        <button type='submit' className='rounded w-20 bg-emerald-700'>Submit</button>

      </form>
    </div>
  )
}
