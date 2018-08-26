import React, { Component } from "react";
import axios from "../../../axios.js";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import "./Posts.css";
import { Route, Link } from "react-router-dom";

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
    // console.log(this.props);
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

    // we are using history b/c we can now push a new page onto the stack of the navigation. think the forward and back buttons in the browser
    // allows for programmatic navigation
    this.props.history.push({ pathname: `/posts/${id}` });
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
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path="/posts/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
