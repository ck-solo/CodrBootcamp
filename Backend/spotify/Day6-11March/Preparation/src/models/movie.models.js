import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name:String,
    actor:String
})

const moviemodel = mongoose.model("movies",movieSchema)

export default moviemodel