'use client'

import { useFormState } from 'react-dom'
import { addPost } from '@/app/lib/actions'
import { useSession } from 'next-auth/react'

export const AddPost = () => {
  const { data: session } = useSession()
  const initialState = { message: null, errors: {} }
  // const [state, dispatch] = useFormState(addPost, initialState);

  return (
    <main>
      <h1>Add Post</h1>
      <form action={addPost}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' name='title' className='text-slate-950' />
        </div>
        <div>
          <label htmlFor='content'>Content:</label>
          <input type='text' id='content' name='content' className='text-slate-950' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}
