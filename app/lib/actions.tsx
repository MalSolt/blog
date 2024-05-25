'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import prisma from './prisma'
import { Post } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth'

export type State = {
  errors?: {
    title?: string[]
    content?: string[]
  }
  message?: string | null
}

export async function addPost(formData: FormData) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return
  }

  try {
    const title = formData.get('title') as string
    const content = formData.get('content') as string

    const result = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        author: {
          connect: { id: session.user.id },
        },
      },
    })
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Post.',
    }
  }

  revalidatePath('/')
  redirect('/')
}

export async function deletePost(postId: Post['id']) {
  try {
    const result = await prisma.post.delete({
      where: {
        id: postId,
      },
    })
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Post.',
    }
  }

  revalidatePath('/')
}

export async function likePost(postId: Post['id']) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return
  }

  try {
    const result = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likedBy: {
          connect: { id: session.user.id },
        },
      },
    })
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Post.',
    }
  }

  revalidatePath('/')
}
