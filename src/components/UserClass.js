import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "deafult",
        avatar: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RaviDangwal");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    // console.log(this.props.name + " child render ");
    const { name, avatar_url } = this.state.userInfo; //desturctuting props
    // const { count } = this.state; //desturctuting props
    return (
      <div className="user-card">
        {/* <h2>count:{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increase
        </button> */}
        <h2>Name: {name}</h2>
        <h3>
          avatar:
          {<img className="avatar" src={avatar_url}></img>}
        </h3>
        <h4>Contact: @/ravidangwal27</h4>
      </div>
    );
  }
}
export default UserClass;
