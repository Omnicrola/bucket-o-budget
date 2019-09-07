import * as React from "react";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import GAuth from "../g-api/GoogleAuth";
import {AUTHENTICATION_ERROR, UPDATE_AUTHENTICATION} from "../actions/ActionTypes";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateSignin = this.updateSignin.bind(this);
        this.error = this.error.bind(this);
    }

    componentDidMount() {
        GAuth.init(this.updateSignin, this.error);
    }

    updateSignin(isAuthenticated) {
        this.props.updateAuth({isAuthenticated});
    }

    error(error) {
        this.props.authError({error});
    }

    render() {
        return (
            <div className="screen">
                <h1>Bucket 'O Budget</h1>
                <Button variant="contained"
                        color="primary"
                        onClick={() => GAuth.signIn()}>Login with Google</Button>
                {this.props.authError && <div className="error">
                    {this.props.authError}
                </div>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authError: state.auth.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateAuth: (payload) => dispatch({type: UPDATE_AUTHENTICATION, payload}),
        authError: (payload) => dispatch({type: AUTHENTICATION_ERROR, payload}),
    };
}

LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export {LoginScreen};