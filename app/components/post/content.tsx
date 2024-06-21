import { TPost } from "@/app/models"

type Props = {
  text: TPost['content']
}

export const Content = ({ text }: Props) => {
  return <p className='px-4' >{text}</p>
}
