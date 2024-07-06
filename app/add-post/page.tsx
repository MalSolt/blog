'use client'

import { useFormState } from 'react-dom'
import { useSession } from 'next-auth/react'
import { StatusButton } from '../../components/ui/button/status-button'
import { addPost } from '@/lib/actions/post'
import { Label } from '@/components/ui/form/label'
import { InputWithLabel } from '@/components/ui/form/input-with-label'
import { Input } from '@/components/ui/form/input'

export default function AddPost() {
  const { data: session } = useSession()

  return (
    <main>
      <h1 className='text-4xl text-primary'>Add Post</h1>
      <form action={addPost} className='flex flex-col gap-4 mt-4'>
        <InputWithLabel id='title' label='Title' name='title'/>
        <InputWithLabel id='content' label='Content' name='content' />
        <StatusButton>Submit</StatusButton>
      </form>
    </main>
  )
}
