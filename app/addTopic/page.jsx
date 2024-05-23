import React from 'react'

const page = () => {
  return (
    <>
  <form className='flex gap-3 flex-col'>
    <input type="text" name="text" id="text" placeholder='Topic Title' className='flex border
     border-slate-400 px-9 py-1 my-3 rounded-2xl' />
  </form>

  <form className='flex gap-3 flex-col'>
  <input type="text" name="text" id="text" placeholder='Topic Description' className='flex border
   border-slate-400 px-9 py-1 my-3 rounded-2xl' />
</form>
<button className='flex bg-green-600 text-stone-100 rounded-3xl px-6 py-2 w-fit'> Add Topic </button>
  </>
  )
}

export default page
