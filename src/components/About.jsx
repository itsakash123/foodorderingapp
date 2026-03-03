import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import userContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-charcoal-900 mb-3">
            About Us
          </h1>
          <p className="text-charcoal-500 text-lg">
            Built with React to learn and explore modern web development.
          </p>
        </div>

        <div className="bg-white border border-charcoal-100 rounded-2xl p-6 shadow-sm mb-8">
          <h3 className="text-sm font-semibold text-charcoal-400 uppercase tracking-wider mb-3">
            Logged In User
          </h3>
          <userContext.Consumer>
            {({ loggedInUser }) => (
              <span className="inline-flex items-center bg-brand-100 text-brand-600 font-semibold text-sm px-4 py-2 rounded-full">
                {loggedInUser}
              </span>
            )}
          </userContext.Consumer>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-charcoal-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-charcoal-900 mb-4">
              Function Component
            </h3>
            <User name={"Akash function"} />
          </div>
          <div className="bg-white border border-charcoal-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-charcoal-900 mb-4">
              Class Component
            </h3>
            <UserClass name={"First Child"} location={"Bareilly class"} />
          </div>
        </div>
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
