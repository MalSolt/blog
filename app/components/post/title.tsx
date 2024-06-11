import { Post } from '@prisma/client'

type Props = {
  text: Post['title']
}

export const Title = ({ text }: Props) => {
  return <h2 className='text-3xl text-primary px-4'>{text}</h2>
}
