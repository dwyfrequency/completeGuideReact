import React, { Component } from "react";
// import axios from "axios";
// now axios points to our defined instance
// import axios from "../../axios";
// We use the Link component instead of the a tag so our spa doesnt rerender
// To do link specific styling with active, we need NavLink
// Switch: will tell react router to only load one route, the first one you find that matches a given route
// Redirect: you can add it to a switch and specify from/to route
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";
// import NewPost from "./NewPost/NewPost";
// import FullPost from "./FullPost/FullPost";
/*whenever you do an import from, you inform webpack about the dependency - the bundler includes the resource in the global */
/* Lazy loading: defer initialization of an object until the point at which it is needed */

const AsyncNewPost = asyncComponent(() => {
  // dyanmic import only, gets called when the constant gets used somewhere; ie webpack loads it only when needed ipso facto lazy loading
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };
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
                {/* need to add exact so that the router tells it this must be the full path - to receive the active css class 
                we can also override the className given
                use activeStyle to do some inline styling */}
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={
                    {
                      pathname: "/new-post",
                      hash: "#submit",
                      search: "?quick-submit=true"
                    } // to get around this use ${this.props.match.url}/whateverEndpoint // when using to, it always uses and absolute path. ie it adds /new-post to your domain // hash allows us to jump to a part of our page // search: allows us to setup query params
                  }
                >
                  New Post
                </NavLink>
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
        <Switch>
          {/* needed to switch the order of the routes once we removed exact from the "/" posts path */}
          {/* if this auth resolves to false, then the redirect kicks in and we go back to posts */}
          {this.state.auth ? (
            <Route path="/new-post" exact component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          {/* this will render if there are any unknown routes called, we commented out redirect so we wouldnt get redirected to an actual page. This will render when we get a false for auth */}
          <Route render={() => <h1>Not Found</h1>} />
          {/* Redirect sends our request from the "/" to "/posts"*/}
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
          {/* passing variable parameter to the path, this will be replaced dynamically 
        must put the dyanmics at the bottom or else new post may have been recog'd as an id*/}
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
