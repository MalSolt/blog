'use server'

import { TPost, TComment } from '@/models'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { authOptions } from '../auth'
import prisma from '../prisma'

export async function addComment(formData: FormData, postId: TPost['id']) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return
  }

  try {
    const text = formData.get('text') as string

    const result = await prisma.comment.create({
      data: {
        text,
        author: {
          connect: { id: session.user.id },
        },
        post: {
          connect: { id: postId },
        },
      },
    })
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Commnet.',
    }
  }

  revalidatePath('/')
}

export async function deleteComment(commentId: TComment['id']) {
  try {
    const result = await prisma.comment.delete({
      where: {
        id: commentId,
      },
    })
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Comment.',
    }
  }

  revalidatePath('/')
}

export async function likeComment(commentId: TComment['id']) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return
  }

  try {
    const result = await prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        likedBy: {
          connect: { id: session.user.id },
        },
      },
    })
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Comment.',
    }
  }

  revalidatePath('/')
}
