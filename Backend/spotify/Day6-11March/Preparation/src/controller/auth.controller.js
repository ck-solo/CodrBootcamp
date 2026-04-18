import moviemodel from "../models/movie.models.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  const { name, actor } = req.body;
  const user = await moviemodel.create({
    name,
    actor,
  });

  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    "23jh4h2n5n3ns8dn309snw93nsxnr82b",
  );

  res.status(201).json({
    message: "movieList created successfully",
    token: token,
  });
}

export async function getmovie(req, res) {
  const { token } = req.body;
  const decoded = jwt.verify(token, "23jh4h2n5n3ns8dn309snw93nsxnr82b");

  res.status(200).json({
    message: "movie list fetch successfully",
    user: decoded,
  });
}
