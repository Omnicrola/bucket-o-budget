import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {selectSpreadsheetId} from "../middleware/selectors";
import GoogleSheets from "../g-api/GoogleSheets";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        if (!this.props.spreadsheetId) {
            this.props.history.push('/choose-sheet')
        } else {
            GoogleSheets.getBucketBudget(this.props.spreadsheetId)
                .then(data => this.setState({data}));
        }
    }

    render() {
        return (
            <div className="screen">
                <h1>Add Entry</h1>
                {JSON.stringify(this.state.data)}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        spreadsheetId: selectSpreadsheetId(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

HomeScreen = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));
export {HomeScreen};