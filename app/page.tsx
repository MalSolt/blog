import prisma from '@/app/lib/prisma'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { LogoutButton } from './components/auth'
import { Post } from './components/post/post'
import { authOptions } from './lib/auth'

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
      comments: true,
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
        <LogoutButton />
        <Link href='/add-post'>Add Post</Link>
      </div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </main>
  )
}
