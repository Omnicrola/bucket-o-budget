import * as React from "react";
import {connect} from "react-redux";

class AddToBucketScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className="">Add Entry</div>);
    }
}


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        click: () => dispatch({type: 'CLICK'})
    };
}

AddToBucketScreen = connect(mapStateToProps, mapDispatchToProps)(AddToBucketScreen);
export {AddToBucketScreen};