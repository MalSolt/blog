import { Comment, Post, User } from '@prisma/client'

export type TPost = {
  likedBy: Pick<User, 'name' | 'email'>[]
  author: {
    name: User['name']
    email: User['email']
  }
  comments: Comment[]
} & Post

export interface TUser extends User {
  likedPosts: Post[]
}
