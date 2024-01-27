import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component{
  constructor(props){
      super(props);
      
      console.log("parent-constructor");
  }
  componentDidMount() {
      
      console.log("Parent - ComponentDidMount");
  }
  render(){
      console.log("Parent- render");
      return(
          <div>
              <h1>About Us Page</h1>
              <p> This is the About us page which on you are</p>
              <Profile name={"First child"} xyz="abc"/>
              
          </div>
      )
  }
}
export default About;