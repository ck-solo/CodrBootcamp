import  Imagekit  from "@imagekit/nodejs"
import { IMAGEKIT_PRIVATE_KEY } from "../config/config.js"

const imagekitClient = new Imagekit({
    privateKey: IMAGEKIT_PRIVATE_KEY
})


export async function uploadFile({buffer, fileName}){
    const result = await imagekitClient.files.upload({
        file: await Imagekit.toFile(buffer,fileName),
        fileName,
        folder:"kodr-3/insta/posts"
    })

    return result
}
