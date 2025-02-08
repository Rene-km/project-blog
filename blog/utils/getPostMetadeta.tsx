import fs from "fs"
import matter from "gray-matter"
import { title } from "process"

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
                content: fileContents
        }
        
    })
    return posts

}