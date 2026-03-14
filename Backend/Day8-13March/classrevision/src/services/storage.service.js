import IMAGEKIT, { ImageKit } from "@imagekit/nodejs"
import { config } from "../config/config.js"

const imagekit = new IMAGEKIT({
    privateKey:config.IMAGE_KIT
})


export async function uploadfunction(buffer,fileName){
    const fileResult = await imagekit.files.upload({
        file: await ImageKit.toFile(buffer.fileName),
        fileName:fileName,
    })
    
    return fileResult
}