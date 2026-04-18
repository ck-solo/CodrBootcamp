import uploadFile from "../services/storage.service.js"

export async function uploadSong(req,res){
  const result = await uploadFile(req.file)

  res.status(201).json({
    messege:"create to hogaya",
    result
  })

}
