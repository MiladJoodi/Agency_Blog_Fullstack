
import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css"
import { getPost, getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"})

//     if (!res.ok) {
//         throw new Error("Something went wrong")
//     }
//     return res.json();
// }

const BlogPage = async () => {

    // FETCH DATA WITH AN API
    // const posts = await getData()

    // FETCH DATA WITHOUT AN API
    const posts = await getPosts()

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}



        </div>
    );
}

export default BlogPage;