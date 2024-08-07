import { Comment, Post, User } from '@prisma/client'

export type TPost = {
  likedBy: Pick<User, 'name' | 'email'>[]
  author: {
    name: User['name']
    email: User['email']
  }
  comments: TComment[]
} & Post

export type TUser = {
  likedPosts: Post[]
} & User

export type TComment = {
  likedBy: Pick<User, 'name' | 'email'>[]
} & Comment
