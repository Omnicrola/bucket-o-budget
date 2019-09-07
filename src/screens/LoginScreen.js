import * as React from "react";
import {connect} from "react-redux";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className="home-screen">
            <h1>Login</h1>
            <button onClick={this.props.click}>Login</button>
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

LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export {LoginScreen};