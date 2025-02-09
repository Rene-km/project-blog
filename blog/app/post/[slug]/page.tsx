import React from 'react'
import BlogCard from '../../components/blogCard'
import getPostMetadata from '@/utils/getPostMetadeta'

// This generates all possible paths at build time
export async function generateStaticParams() {
  const posts = getPostMetadata('posts')
  return posts.map((post) => ({
    slug: post.slug,
  }))
}


const Post =  async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const posts = getPostMetadata('posts')
  const slug = (await params).slug
  
  // Use the awaited slug
  const post = posts.find((p) =>  p.slug === slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 mb-8">
      <BlogCard post={post} />
    </div>
  )
}

export default Post
