const postModel = require("../models/post.models");
const uploadFile = require("../services/post.services");



async function CreatePost(req, res) {

  const result = await uploadFile(req.file.buffer);
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({ message: "post is created", post: post });
}

async function ShowPost(req,res) {
    const notes = await postModel.find();
    res.status(200).json({message:"data accessed", notes:notes})
}

async function DeletePost(req,res) {
  const id= req.params.id 
  await postModel.findOneAndDelete({
    _id:id
  })
  res.status(200).json({message:"post is deleted"})
}
module.exports = { CreatePost,ShowPost ,DeletePost};
