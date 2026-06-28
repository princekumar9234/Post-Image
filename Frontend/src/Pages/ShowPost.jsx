import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "./Create.module.css";
import { useNavigate } from "react-router-dom";

const ShowPost = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts").then((res) => {
      setPosts(res.data.notes);
    });
  }, []);

  const deletePost = (id) => {
    axios.delete(`http://localhost:3000/api/delete/${id}`).then((res) => {
      alert("post is deleted");
      navigate("/");
      setPosts(posts.filter((post) => post.id !== id));
    });
  };
  return (
    <div>
      <div className={styles.container}>
        {posts.length > 0 ?  (
          posts.map((post) => {
            return (
              <div key={post._id} className={styles.box}>
                <img src={post.image} className={styles.image} />
                <p className={styles.caption}> {post.caption} </p>

                <button
                  onClick={() => deletePost(post._id)}
                  className="py-1 text-sm rounded mt-2 px-4 bg-red-600"
                >
                  Delelte
                </button>
              </div>
            );
          })
        ) : (
          <h1> Post not available</h1>
        )}
      </div>
    </div>
  );
};

export default ShowPost;
