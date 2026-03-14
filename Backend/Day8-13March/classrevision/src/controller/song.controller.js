
export async function songUpload(req,res){
    const data = req.file
    console.log(data)
    

const insta = await imagekit.files.upload({
        file:data.buffer.toString("base64"),
        fileName:data.originalname,
        folder:"Insta",
        description:"insta reel"
    })

    res.status(201).json({
        message:"Reel uploaded sucessfully",
        url:insta.url
    })
}