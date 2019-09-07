import * as React from "react";
import {connect} from "react-redux";
import GAuth from '../g-api/GoogleAuth';
import GoogleSheets from "../g-api/GoogleSheets";


class HistoryScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // GAuth.init(this.updateSignin, this.error);
    }

    render() {
        return (
            <div className="screen">
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

HistoryScreen = connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
export {HistoryScreen};