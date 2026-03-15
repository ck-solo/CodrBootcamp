import songModel from "../models/song.model.js";
import {uploadFile} from "../services/api.service.js"
import id3 from "node-id3"

export async function updateSong(req, res) {

    console.log(req)
    console.log(req.body)
    console.log(req.file)
   
    const { id } = req.user
    const { title , artist, image } = id3.read(req.file.buffer)
    const fileResult = await uploadFile(req.file.buffer, req.file.originalname)
    const imageFileResult = await uploadFile(image.imageBuffer, req.file.originalname + "jpg")


    const song = await songModel.create({
        title,
        artist,
        url:fileResult.url,
        posterUrl:imageFileResult.url,
        user:id
    })

    res.status(200).json({
        message:"song uploaded successfully",
        song
    })
}
