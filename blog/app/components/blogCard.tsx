'use client'

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

interface blogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  image: string;
  author: string;
  content: string;
}


interface BlogCardProps {
  post: blogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className='px-4'>
        <CardHeader>
          <CardTitle className=''>
            <h1 className='scroll-m-20 text-4xl font-bold tracking-tight first:mt-0'>
              {post.title}
            </h1>
          </CardTitle>
          <p className="leading-7 [&:not(:first-child)]:mt-6 font-black">Written by: {post.author}</p>
          <p className='my-4 text-lg text-gray-500 border-b pb-2'>
            Published on {post.date}
          </p>
        </CardHeader>
        <CardContent>
          <Image
            src={`${post.image}`}
            width={500}
            height={500}
            alt="Photo for blog"
            className='mx-auto mb-8'
          />
          <Markdown children={post.content} options={{
            overrides: {
              h1: {
                props: {
                  className: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
                }
                },
                h2: {
                  props: {
                    className: "scroll-m-20 text-xl font-semibold tracking-tight",
                  }
                },
                p: {
                  props: {
                    className: 'leading-7 [&:not(:first-child)]:mt-6 mb-2',
                  }
              },
              ul: {
                props: {
                  className: "my-6 ml-6 list-disc [&>li]:mt-2",
                }
              },
              ol: {
                props: {
                  className: "my-6 ml-6 list-disc [&>li]:mt-2",
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
