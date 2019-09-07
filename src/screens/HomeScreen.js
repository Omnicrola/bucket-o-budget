import * as React from "react";
import {connect} from "react-redux";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className="home-screen">
            <h1>Home</h1>
            <button onClick={this.props.click}>Click me</button>
        </div>);
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        click:()=>dispatch({type:'CLICK'})
    };
}

HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export {HomeScreen};