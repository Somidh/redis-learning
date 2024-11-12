import { redis } from '@/app/lib/redis';
import { nanoid } from 'nanoid';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { text, tag } = body;

    console.log(text, tag);

    const commendId = nanoid();

    await redis.rpush('comments', commendId);

    return new Response('OK');
  } catch (error) {
    console.log(error);
  }
};
