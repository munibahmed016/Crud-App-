import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi";
const TopicsList = () => {
  return (
    <>
        <div className='p-4 border border-slate-400  my-3 flex justify-between gap-5 rounded-3xl items-start'>
            <div>
                <h2 className='font-bold text-2xl'>Topic Title</h2>
                <div>Topic Description</div>
            </div>
            <div className=' flex gap-2'>
                <RemoveBtn/>
                <Link href={'/editTopic/123'}>
                  <HiPencilAlt size={26}/>
                </Link>
            </div>
        </div>
    </>
  )
}

export default TopicsList
