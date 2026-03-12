import ImageKit from "@imagekit/nodejs";
import { config } from "../config/config.js";

const client = new ImageKit({
  privateKey: config.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

const uploadFile = async (buffer) => {
  const response = await client.files.upload({
    file: buffer,
    fileName: "file-name.jpg",
  });
  return response

};

export default uploadFile   


