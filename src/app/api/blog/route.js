import { connectToDb } from "@/lib/utils"

export const Get = async ()=>{
    try{
        connectToDb()

        
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch posts!")
    }
}