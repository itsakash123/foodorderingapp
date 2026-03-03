//class based component

// React Component is class  is given by react
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props); // it is used to call the constructor of parent class
    //this state is a big object which will create all state varibles
    this.state = {
      userInfo:{
        name :"Dummy Name",
        location:"Default",
       
      }
     
    };
    //console.log(this.props.name + "Constructor");
  }
  async componentDidMount() { 
    //console.log(this.props.name + "componentDidMount ");

    const data = await fetch("https://api.github.com/users/itsakash123");
    const json=await data.json();
    this.setState({
      userInfo:json,
    })
    //console.log(json);
  }
  componentDidUpdate(){
    //console.log("component did update")
  }
  componentWillUnmount(){
    //console.log("component will unmount");

  }
  render() {
     const{name,location,avatar_url}=this.state.userInfo;
   
    //console.log(this.props.name + "render");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact:@akashkumar</h4>
      </div>
    );
  }
}
export default UserClass;

/******
 * 
 * --MOUNTING
 * 
 * constructor
 * render(dummy data)
 * <html dummy>
 * component did mount
 * <API CALL>
 * <this.setState>
 * 
 * 
 * --UPDATE
 * 
 * render(API DATA)
 * <HTML (new Api Data)
 * component did update
 */