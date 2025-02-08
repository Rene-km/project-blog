/* eslint-disable react/no-children-prop */
import React from 'react'
import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface blogPost  {
  blog: {
    content: string,
    title: string,
    date: string,
    image: string
  }
  
}


const BlogCard = (props: blogPost) => {
  const blog = props.blog;
 
  
  return (
    <div className="max-w-3xl mx-auto">
    <Card className=''>
        <CardHeader>
            <CardTitle className=''><h1 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0'>{blog.title}</h1></CardTitle>
            <p className='my-4 text-lg text-gray-500 border-b pb-2'>Published on {blog.date}</p>
        </CardHeader>
        <CardContent>


  <Image
      src={`${blog.image}`}
      width={500}
      height={500}
      alt="Photo for blog"
      className='mx-auto pb-4'
    />
 
          <Markdown children={blog.content} options={{
      overrides: {
        h1: {
          props: {
            className: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
          }
          },
          p: {
            props: {
              className: 'leading-7 [&:not(:first-child)]:mt-6',
            }
        },
      },
    }} />
        </CardContent>
        <CardFooter>
       
        </CardFooter>
    </Card>
    </div>
  )
}

export default BlogCard
