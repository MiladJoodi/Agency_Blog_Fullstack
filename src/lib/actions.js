"use server"

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";


// Add Post
export const addPost = async (formData) => {

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });

        await newPost.save()
        console.log("save to db")
        revalidatePath("/blog")
    } catch (err) {
        console.log(err)
        return {error: "Something went wrong!"}
    }
}

//Delete
export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDb()

        await Post.findByIdAndDelete(id);
        console.log("Deleted from db")
        revalidatePath("/blog")
    } catch (err) {
        console.log(err)
        return {error: "Something went wrong!"}
    }
}


// AUTH
export const handleGithubLogin = async ()=>{
    "use server"
    await signIn("github")
}

export const handleLogout = async ()=>{
    "use server"
    await signOut();
}