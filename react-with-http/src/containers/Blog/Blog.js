import React, { Component } from "react";
// import axios from "axios";
// now axios points to our defined instance
// import axios from "../../axios";
import { Route } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        {/* define path and what should render when it is hit
        react router to determine what path you are on, sees if your current path starts "/" in this case 
        with  exact dictates that the complete path must be exactly that */}
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>New Post</h1>} /> */}
        {/* component property allows use to pass a component that should be rendered in this
        routes place; 
        it needs to be a reference to the function or class that we want to use 
        With the below, we can see all of the posts render for the home path
        - note, we are not passing a string, we are passing the actual imported function or component*/}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
