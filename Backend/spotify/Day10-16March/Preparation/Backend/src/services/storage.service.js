import ImageKit, { toFile } from "@imagekit/nodejs";
import { IMAGE_KIT } from "../config/config.js";

const imagekit = new ImageKit({
  privateKey: IMAGE_KIT,
});

export const uploadFile = async (buffer, originalname) => {
  try {
    const result = await imagekit.files.upload({
      file: buffer.toString("base64"),
      fileName: originalname,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
