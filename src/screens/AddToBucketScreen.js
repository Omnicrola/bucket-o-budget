import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class AddToBucketScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (!this.props.selectedSheet) {
            this.props.history.push('/choose-sheet')
        }
    }

    render() {
        return (
            <div className="screen">
                <h1>Add Entry</h1>
                {this.props.selectedSheet}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        selectedSheet: state.sheet.id
    };
}

function mapDispatchToProps(dispatch) {
    return {
        click: () => dispatch({type: 'CLICK'})
    };
}

AddToBucketScreen = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddToBucketScreen));
export {AddToBucketScreen};