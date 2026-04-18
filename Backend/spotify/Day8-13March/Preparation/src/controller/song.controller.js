import { ImageKit } from "@imagekit/nodejs/client.js"
import { config } from "../config/config.js"


const imagekit = new ImageKit({
    privateKey:config.IMAGE_KIT

})

export async function songUpload(req,res){
    const file = req.file
    console.log(file)

    const reelvideo = await imagekit.files.upload({
        file:file.buffer.toString("base64"),
        fileName:file.originalname,
        folder:"Reel",
        description:"reel upload ho gyi"    
    })

    res.status(201).json({
        message:"reel uploaded successfully",
        url:reelvideo.url
    })
}