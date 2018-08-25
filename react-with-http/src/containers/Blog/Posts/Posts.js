import React, { Component } from "react";
import axios from "../../../axios.js";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  randomAuthor = () => {
    const writers = ["Tom", "Lisa", "Suz", "Jojo", "Sara"];
    const idx = Math.floor(Math.random() * writers.length);
    return writers[idx];
  };

  // executed each time we change the page
  componentDidMount = () => {
    console.log(this.props);
    axios
      .get("/posts")
      .then(resp => {
        // only display four posts - our own form of pagination
        const posts = resp.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return { ...post, author: this.randomAuthor() };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(err => {
        console.log(err);
        // this.setState({ error: true });
      });
  };

  postSelectedHandler = id => {
    // when a post is selected, our state changes. Our fullpost component is listening for the state change and rerenders when it does
    // this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: `/${id}` });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
    if (this.state.error === false) {
      posts = this.state.posts.map(post => {
        return (
          // key must be in the outer most element in your loop
          // <Link to={`/${post.id}`} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
            key={post.id}
          />
          // </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
