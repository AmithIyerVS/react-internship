import React from "react";

class Diff extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            mess:"Click on the button"
        }
    }

    callback=()=>alert("incremented successfully...");

    // static getDerivedStateFromProps(props,state){
    //     return {mess:props.name};
    // }

    // shouldComponentUpdate(){
    //     return false;
    // }

    change=()=>{
        this.setState(
        prevstate =>({ 
            count:prevstate.count+1,
            mess:"you clicked it...!!!  "
    }
    )
    //     {count:1,
    //   mess:"you clicked it...!!!  "
    // }
    )
        this.callback();
    }

    render(){
        const {name}=this.props;
        return (
            <>
            <h1>{this.state.count} Hi {name} {this.state.mess}</h1>
            <button onClick={()=>this.change()}>Enter</button>
            </>
        );
    }
}

export default Diff;