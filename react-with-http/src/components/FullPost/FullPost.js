import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
        .then(resp => {
          this.setState({ loadedPost: resp.data });
        });
    }
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      // we need to do this check and the one below, b/c once we get the postId, our get request is triggered.
      // It takes time to receive it back so we dont want to try and render undefined data if there is a timing delay
      let post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
