import React from "react";
/* we import the image b/c our build workflow bundles our src folder and creates a new output folder. Our whole scr folder will be shipped so we need to make webpack aware of this image so webpack can bundle it accordingly. So we need to import it 
We then just provide our img tag with the imported module and webpack will give it the optimized image 
*/
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
