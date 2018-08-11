// import React from "react";withClass_V2
import React, { Component } from "react";

// we can use lower case b/c it is not a component, we are just returning a function
// const withClass_V2 = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       {/* we use the spread operator to take the props object and create a new object of key value pairs */}
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// stateful version of the above - we have anonomous class below
const withClass_V2 = (WrappedComponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withClass_V2;
