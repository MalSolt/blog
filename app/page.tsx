import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { LogoutButton } from '../components/auth'
import { authOptions } from '../lib/auth'
import { Post } from '@/components/post/post'

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true, email: true },
      },
      likedBy: {
        select: { name: true, email: true },
      },
      comments: {
        include: {
          likedBy: {
            select: { name: true, email: true },
          },
        },
      },
    },
  })

  return posts
}

export default async function Home() {
  const session = await getServerSession(authOptions)
  const posts = await getPosts()

  return (
    <main className='pt-10 flex flex-col items-center gap-10'>
      <div className='w-full flex gap-4 justify-end'>
        <span>{session?.user.email}</span>
        <span>{session?.user.name}</span>
        <span> {session?.user.role}</span>
        <LogoutButton />
        <Link href='/add-post'>Add Post</Link>
      </div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </main>
  )
}
