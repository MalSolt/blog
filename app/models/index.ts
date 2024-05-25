import { Post, User } from '@prisma/client'

export type PostWithLikesAndAuthor = {
  likedBy: Pick<User, 'name' | 'email'>[]
  author: {
    name: User['name']
    email: User['email']
  }
} & Post

export interface UserWithLikedPosts extends User {
  likedPosts: Post[]
}
