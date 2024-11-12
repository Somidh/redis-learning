'use client'

import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const handleComment = async () => {
    const { data } = await axios.post('/api/comment', {
      text: 'Hello bro 2 ',
      tag: ['TypeScript'],
    });

    console.log(data);
  };

  return (
    <div className='flex flex-col gap-8 items-start'>
      <Link href={'/comments'} prefetch={false}>
        See all comments
      </Link>
      <button onClick={handleComment}>Comment</button>
    </div>
  );
}
