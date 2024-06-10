import { Comment, Post, User } from '@prisma/client'

export type PostWithRelatedData = {
  likedBy: Pick<User, 'name' | 'email'>[]
  author: {
    name: User['name']
    email: User['email']
  }
  comments: Comment[]
} & Post

export interface UserWithLikedPosts extends User {
  likedPosts: Post[]
}
