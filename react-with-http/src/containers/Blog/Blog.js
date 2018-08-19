import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: []
  };

  randomAuthor = () => {
    const writers = ["Tom", "Lisa", "Suz", "Jojo", "Sara"];
    const idx = Math.floor(Math.random() * writers.length);
    return writers[idx];
  };

  componentDidMount = () => {
    console.log(this.randomAuthor());
    axios.get("https://jsonplaceholder.typicode.com/posts").then(resp => {
      const posts = resp.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return { ...post, author: this.randomAuthor() };
      });
      this.setState({ posts: updatedPosts });
      console.log(resp.data);
    });
  };

  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} author={post.author} />;
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
