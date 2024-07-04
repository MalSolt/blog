import { Input, InputProps } from './input'
import { Label } from './label'

type Props = InputProps & {
  label: string
}

export const InputWithLabel = ({ id, label, ...rest }: Props) => {
  return (
    <div className='mb-4'>
      <Label htmlFor={id}>{label}</Label>
      <Input {...rest} id={id} />
    </div>
  )
}
