import ImageKit from "@imagekit/nodejs";
import { config } from "../config/config.js";
import {randomUUID} from "crypto"

const imagekit = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

const uploadFile = async (file) => {
  const response = await imagekit.files.upload({
    file: file.buffer.toString("base64"),
    fileName: randomUUID(),
  });
  return response;
};

export default uploadFile;
