import React, { Component } from "react";
import axios from "axios";
import "./NewPost.css";
import { Redirect } from "react-router-dom";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    submitted: false
  };

  componentDidMount = () => {
    // could do something like, if unauth => this.props.history.replace('/posts');
    // if a route isnt rendered then you cant reach it
    console.log(this.props);
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    // axios will stringify this for us
    axios.post("/posts", data).then(resp => {
      console.log(resp);
      /* Redirect replaces the current page so if we click the back button, you can't go back to the last page. You can use replace to have the same behavior
      if you use push instead of using the Redirect component - you can go back */
      this.props.history.push("/posts");
      // this.props.history.replace("/posts");

      // this.setState({ submitted: true });
    });
  };

  render() {
    // if redirect is populated then send us to posts otherwise render the new post form
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/posts" />;
    }
    return (
      <div className="NewPost">
        {/* If we redirect outside of a switch statement, we must always specify a to location  */}
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
