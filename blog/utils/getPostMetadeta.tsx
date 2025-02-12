import fs from "fs"
import matter from "gray-matter"


export default function getPostMetadata(basePath: string) {
    const folder = basePath + "/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith(".md"))


const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(
            `${basePath}/${filename}`,"utf8")
            const matterResult = matter(fileContents)
            return {
                title: matterResult.data.title,
                slug: filename.replace(".md", ""),
                description: matterResult.data.description,
                date: matterResult.data.date,
                image: matterResult.data.image,
                author: matterResult.data.author,
                content: fileContents
        }
        
    })
    return posts

}