import React, { Component } from "react";
// import axios from "axios";
// now axios points to our defined instance
// import axios from "../../axios";
// We use the Link component instead of the a tag so our spa doesnt rerender
import { Route, Link } from "react-router-dom";
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
                {/* Link allows us to prevent the default for an a tag of going to a new page
                 the to attribute  replaces our href attribute in an a tag 
                 We can config dynamic content by passing 'to' a js obj*/}
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    // hash allows us to jump to a part of our page
                    hash: "#submit",
                    // search: allows us to setup query params
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </Link>
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
