import songModel from "../models/song.model.js"
import { uploadFile } from "../services/storage.service.js";
import id3 from "node-id3";

export async function updateSong(req, res) {
  const file = req.file;
  const { title, artist, image } = id3.read(file.buffer);
  const videoInfo = await uploadFile(file.buffer, file.originalname);
  const imageInfo = await uploadFile(
    image.imageBuffer,
    file.originalname + ".jpg",
  );

  const song = await songModel.create({
    title,
    artist,
    url: videoInfo.url,
    posterUrl: imageInfo.url,
  });

  console.log(imageInfo);

  res.status(200).json({ message: "song uploaded successfully" ,song});
}
