import Imagekit from '@imagekit/nodejs'
import { config } from '../config/config.js'


const data = new Imagekit({
    privateKey:config.IMAGEKIT_URL
})


export async function uploadFile(buffer, fileName){
    const fileResult = await data.files.upload({
        file:await Imagekit.toFile(buffer, fileName),
        fileName:fileName,
    })

    return fileResult
}

