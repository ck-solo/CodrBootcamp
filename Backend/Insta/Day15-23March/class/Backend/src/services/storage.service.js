import ImageKit, { toFile } from "@imagekit/nodejs";
import { IMAGE_KIT } from "../config/config.js";

const client = new ImageKit({
    privateKey:IMAGE_KIT
})

export async function uploadFile({buffer, fileName}){
    const result = await client.files.upload({
        file:await toFile(buffer, fileName),
        fileName:fileName,
        folder:"/instagram/posts"
    })
    return result
}