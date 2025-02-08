import React from 'react'
import { PostProp } from '@/utils/Post'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'



const CardComponent = (props: PostProp) => {
  const post = props.post;
  return (
    <Link href={`/post/${post.slug}`}>
    <Card className='h-full flex flex-col justify-between'>

        <CardHeader><CardTitle className='text-center'><h1 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{post.title}</h1></CardTitle></CardHeader>
        <CardContent className=''>
          <p className="leading-7 kine-clamp-3 [&:not(:first-child)]:mt-6 overflow-hidden"> 
            {post.description}
          </p>
        </CardContent>
        <CardFooter className='mt-3 flex flex-col items-end text-right'>
          <p className='leading-7 [&:not(:first-child)]:mt-6 font-bold'>Date</p>
          <p>{post.date}</p>
        </CardFooter>
    </Card>
    </Link>
  )
}

export default CardComponent
