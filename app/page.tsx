import prisma from '@/app/lib/prisma'
import { Post } from './components/post'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from './components/auth'

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  return posts
}

export default async function Home() {
  const session = await getServerSession(authOptions)
  const posts = await getPosts()

  return (
    <main className='pt-10 flex flex-col items-center gap-16'>
      <LoginButton />
      <LogoutButton />
      <Link href='/add-post'>Add Post</Link>
      <h1>Feed</h1>
      {posts.map((post) => (
        <Post key={post.id} authorName={post.author.name} {...post} />
      ))}
    </main>
  )
}
