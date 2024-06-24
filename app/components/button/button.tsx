import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className='rounded bg-primary w-full h-10 hover:bg-primary-dark transition-colors duration-300 focus:bg-primary-dark'
      {...rest}
    >
      {children}
    </button>
  )
}
