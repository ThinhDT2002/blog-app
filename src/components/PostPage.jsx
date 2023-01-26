import React from "react";
import { useParams, Link } from "react-router-dom";
const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <React.Fragment>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button onClick={() => handleDelete(post.id)}>Delete post</button>
          </React.Fragment>
        )}
        {!post && (
          <React.Fragment>
            <h2>Post not found!</h2>
            <p>Well, that's disappointing</p>
            <p>
              <Link to="/">Visit our homepages</Link>
            </p>
          </React.Fragment>
        )}
      </article>
    </main>
  );
};

export default PostPage;
