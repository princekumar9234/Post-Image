import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleForm = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/api/", formData)
      .then((res) => {
        alert("post is created successfully");
        navigate("/post");
      })
      .catch((err) => {
        console.log(err);
        alert("something is wrong");
      });
  };
  return (
    <div className="flex bg-white p-7 w-fit ml-15 md:ml-[38%] mt-40 justify-center">
      <form
        onSubmit={(e) => {
          handleForm(e);
        }}
        className="flex flex-col gap-2"
      >
        <input className="border px-1 py-2 rounded " type="file" name="image" />
        <input
          className="border px-1 py-2 rounded"
          type="text" name="caption"
          placeholder="write caption"
        />
        <button className=" bg-red-400 w-fit px-4 ml-20 rounded py-2 ">
          Create Posts
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
