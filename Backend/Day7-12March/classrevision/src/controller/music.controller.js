import ImageKit from "@imagekit/nodejs"
import {config} from "../config/config.js"

const imagekit = new ImageKit({
    privateKey : config.IMAGE_KIT
})



export async function uploadSong(req,res){
    const file = req.file
    console.log(file)

    const songs = await imagekit.files.upload({
        file:file.buffer.toString("base64"),
        fileName:file.originalname,
        description:"this is a peaceful song."
    })

    res.status(201).json({
        message:"song post succesfully.",
        url:songs.url
    })    
    
}
