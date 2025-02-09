import CardComponent from "./components/card";
import getPostMetadata from "@/utils/getPostMetadeta";


async function getData() {
  const posts = getPostMetadata('posts');
  return posts;
}

export default async function Home() {
  const postMetadata = await getData();
  
  return (
    <div>
  <div className="container mx-auto flex px-4 justify-center min-h-44">

    <div className="flex  flex-col justify-around text-center w-full py-4"> 
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Blog posts</h1>
      <h2 className="leading-7 [&:not(:first-child)]:mt-6">The following are a collection of blog
        posts that were written by both of us as requested in the deliverables. 
      </h2>
    </div>
   
  </div>

<div className="max-w-7xl grid grid-rows-3 mx-auto gap-8 sm:grid-cols-2 lg:grid-cols-3 p-3 md:p-4 xl:p-5 auto-rows-max">

    {postMetadata.map((post,postIndex) => {
      return (
        <CardComponent key={postIndex} post={post}/>
      )
    })}
 
  </div>
  </div>
  );
}
