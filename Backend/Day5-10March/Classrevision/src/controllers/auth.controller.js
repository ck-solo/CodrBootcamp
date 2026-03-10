import notemodel from "../models/notes.model.js" 
import jwt from "jsonwebtoken"

export async function registertask(req,res) {
    const {task, description} = req.body
    const user = await notemodel.create({
        task,description
    })
    const token = jwt.sign({
        task:user.task,
        id:user._id
    },"43a5074307a0e217f7ddc8e252c3da30c2b731d8935a15c9ac088a0733e6857237b3d700e953db3126a73b03d64c1d87def0ac298df94da5db123f0bb7c65205"
)
res.status(201).json({
    message:"task created successfully",
    token:token
})
    
}

export async function getdata(req,res){
    const { token } = req.body
    const decoded = jwt.verify(token,"43a5074307a0e217f7ddc8e252c3da30c2b731d8935a15c9ac088a0733e6857237b3d700e953db3126a73b03d64c1d87def0ac298df94da5db123f0bb7c65205")

    res.status(200).json({
        message:"task data read succesfully",
        user:decoded
    })

}