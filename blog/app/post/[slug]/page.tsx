import React from 'react'
import BlogCard from '../../components/blogCard'
import fs from "fs"
import matter from 'gray-matter'

const page =  async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {


  let slug = (await params).slug
  const getPostContent = (slug:string) => {
    let folder = "posts"
    const fileContents = fs.readFileSync(
      `${folder}/${slug}.md`,"utf8")
    const matterResult = matter(fileContents);
    const blog = {
        content: matterResult.content,
        title: matterResult.data.title,
        date: matterResult.data.date
    }
    
    return (
      blog
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 mb-8">
      <BlogCard blog={getPostContent(slug)}/>
    </div>
  )
}

export default page
