'use client'

import { useFormState } from 'react-dom'
import { addPost } from '@/app/lib/actions'
import { useSession } from 'next-auth/react'
import { StatusButton } from '../components/button/status-button'

export default function AddPost() {
  const { data: session } = useSession()

  return (
    <main>
      <h1 className='text-4xl text-primary'>Add Post</h1>
      <form action={addPost} className='flex flex-col gap-4 mt-4'>
        <div className='flex flex-col'>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            name='title'
            className='text-slate-950 rounded border-2 border-inherit w-1/2'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='content'>Content:</label>
          <input
            type='text'
            id='content'
            name='content'
            className='text-slate-950 rounded border-2 border-inherit w-1/2'
          />
        </div>
        <StatusButton>Submit</StatusButton>
      </form>
    </main>
  )
}
