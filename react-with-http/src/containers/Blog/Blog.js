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

  componentDidMount = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(resp => {
      // need to set state in the promise or we wont have access to it - b/c timing issue
      this.setState({ posts: resp.data });
      console.log(resp.data);
    });
  };

  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} />;
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
