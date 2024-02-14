import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../src/utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component mounted");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <h2>This is Food delivery app</h2>
        <UserClass name={"Ravi function based"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Food delivery app</h2>
//       <User name={"Ravi function based"} />
//       <UserClass name={"ravi class based"} location={"Dehradun"} />
//     </div>
//   );
// };

export default About;
