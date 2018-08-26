import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount = () => {
    console.log("hello", this.props);
    // this creates an infinite loop - when we call setState, we will call componentDidUpdate again which will trigger another call without additional logic
    // so we check that a post id is not the exact same post
    let id = this.props.match.params.id;
    this.loadData(id);
  };

  /* We need to add cdu, b/c if/when the component is already loaded through routing,  i will not unmount the old one and mount the same one again with dif data. 
  Instead, it will reuse the old one and just update the route paramter. It is our job then to react to this by adding cdu */
  componentDidUpdate = (prevProps, prevState) => {
    let id = this.props.match.params.id;
    this.loadData(id);
  };

  loadData = id => {
    if (id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== Number(id)) // need to convert to a number b/c props will give us a string and the loadedPost.id gives us a number
      ) {
        axios.get(`/posts/${id}`).then(resp => {
          this.setState({ loadedPost: resp.data });
        });
      }
    }
  };

  deletePostHandler = () => {
    axios
      .delete(`/posts/${this.props.match.params.id}`)
      .then(resp => console.log(resp));
  };

  render() {
    console.log("hi");
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      // we need to do this check and the one below, b/c once we get the postId, our get request is triggered.
      // It takes time to receive it back so we dont want to try and render undefined data if there is a timing delay
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
