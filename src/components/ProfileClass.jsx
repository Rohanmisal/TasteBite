import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy name",
                location:"Dummy Location",
            },
        };
    }

    async componentDidMount(){
        //Api Call
        const data = await fetch("https://api.github.com/users/Rohanmisal");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate(){
        //console.log("Child- componentDidMount");
    }
    render() {
        return(
        <div>
            <h1> Profile Class Component</h1>
            <img src={this.state.userInfo.avatar_url}/>
            <h2>Name: {this.state.userInfo.name}</h2>
            <h2>Bio: {this.state.userInfo.bio}</h2>
            
            
        </div>
        );
    }
}

export default Profile;
