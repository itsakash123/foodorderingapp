import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

import userContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
   // console.log("parent constructor");
  }

  componentDidMount() {
    //console.log("akash kumar parent");
  }
  render() {
   // console.log("parent render");

    return (
      <div>
        <h1>About class component</h1>
        <h2>This is our react library</h2>
        <div>
         LoggedIn User
        <userContext.Consumer>
          {({loggedInUser})=><h1 className="text-lg font-bold">{loggedInUser}</h1>}
        </userContext.Consumer>

        </div>
        <User name={"Akash function"} />
        <UserClass name={"First Child"} location={"Bareilly class"} />
        {/* <UserClass name={"Second Child"} location={"US"} /> */}
      </div>
    );
  }
}

export default About;

// const About=()=>{

//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is our react library</h2>
//             <User name={"Akash function"}/>
//             <UserClass name= {"Akash class"}  location={"Bareilly class"}/>
//         </div>
//     )
// }
// export default About;



// parent constructor
// parent render
//  First ChildConstructor
//  First Childrender
//  Second ChildConstructor
//  Second Childrender

//<DOM UPDATED -IN SINGLE BATCH>
//  First ChildcomponentDidMount
// Second ChildcomponentDidMount
//  akash kumar parent