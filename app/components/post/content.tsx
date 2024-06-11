import { Post } from '@prisma/client'

type Props = {
  text: Post['content']
}

export const Content = ({ text }: Props) => {
  return <p className='px-4' >{text}</p>
}
