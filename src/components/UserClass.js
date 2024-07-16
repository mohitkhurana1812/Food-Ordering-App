import { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-cards">
        <h2>Count: {count}</h2>
        <h2>Count: {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
                <h4>Contact: akshaymarch7</h4>
                <button onClick={() => {
                      this.setState({
                            count: this.state.count + 1,
                      })
                }}>Click</button>
      </div>
    );
  }
}
export default UserClass;
