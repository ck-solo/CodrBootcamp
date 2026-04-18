import postModel from "../models/post.model.js";
import { uploadFile } from "../services/storage.service.js";

const getMediaType = (file) =>{
    if(file.fileType == "image") return "image";
    if(file.videoCodec) return "video";
    throw new Error("Unsupported media type")
}

export async function createPost(req, res){
    const { caption } = req.body;
    const files = req.files;

    const media = await Promise.all(files.map(file =>{
        return uploadFile({
            buffer: file.buffer,
            fileName: file.originalname,
        })
    }))

    const post = await postModel.create({
        user:req.user.id,
        caption,
        media: media.map(m =>({
            url:m.url,
            mediaType:getMediaType(m),
        }))
    })

    return res.status(201).json({
        message:"Post created successfully",
        success:true,
        post,
    })






}

export async function getPosts(req,res){
    const posts = await postModel.find().populate("user", "username profileImage").sort({createdAt: -1});

    return res.status(200).json({
        message:"post fetch successfully",
        success:true,
        posts,
    })
}

export async function getPostById(req,res){
    const { id } = req.params
    const post = await postModel.findById(id).populate("user", "username profileImage");

    if(!post){
        return res.status(404).json({
            message:"Post not found",
            success:false,
        })
    }

    return res.status(200).json({
        message:"post fetch successfully",
        success:true,
        post
    })
}


