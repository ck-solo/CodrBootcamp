import songModel from "../models/song.models.js";
import { uploadFile } from "../services/storage.service.js";
import id3 from "node-id3";

export async function songUpdate(req, res) {
  const { id } = req.user;

  const songinfo = id3.read(req.file.buffer);
  const { title, artist, image } = id3.read(req.file.buffer);
  const fileResult = await uploadFile(req.file.buffer, req.file.originalname);
  const imageFileResult = await uploadFile(
    image.imageBuffer,
    req.file.originalname + "jpg",
  );

  const music = await songModel.create({
    title,
    artist,
    url: fileResult.url,
    postUrl: imageFileResult.url,
    user: id,
  });

  res.status(201).json({
    message: "song post successfully",
    // music
  });
}
