import ImageKit from "@imagekit/nodejs"
import { IMAGEKIT_PRIVATE_KEY} from "../config/config.js"


const imagekit  = new ImageKit({
    privateKey:IMAGEKIT_PRIVATE_KEY
})

export async function uploadFile({buffer, fileName}){
    const result = await imagekit.files.upload({
        file:await ImageKit.toFile(buffer,fileName),
        fileName,
        folder:"kodr-3/instarevise/posts"
    })
    return result
}

