import * as React from "react";
import {connect} from "react-redux";
import GoogleDrive from "../g-api/GoogleDrive";
import Select from "@material-ui/core/Select";
import GAuth from "../g-api/GoogleAuth";
import Button from "@material-ui/core/Button";
import {SELECT_SPREADSHEET} from "../actions/ActionTypes";
import {withRouter} from "react-router-dom";

class ChooseSheetScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            selectedFileId: ''
        };
        this.select = this.select.bind(this);
    }

    componentDidMount() {
        GoogleDrive.getSpreadsheets()
            .then(files => {
                this.setState({files});
            })
    }

    mapFileOptions() {
        return this.state.files
            .sort((a, b) => a.modifiedTime - b.modifiedTime)
            .map(file => {
                return (<option key={file.id} value={file.id}>{file.name}</option>);
            });
    }

    select() {
        this.props.selectSheet(this.state.selectedFileId);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="screen">
                <h1>Choose Spreadsheet</h1>
                <Select native
                        value={this.state.selectedFileId}
                        inputProps={{name: 'Spreadsheet'}}
                        onChange={(e) => this.setState({selectedFileId: e.target.value})}>
                    <option value="">-- Choose --</option>
                    {this.mapFileOptions()}
                </Select>
                <Button variant="contained"
                        color="primary"
                        disabled={!Boolean(this.state.selectedFileId)}
                        onClick={this.select}>Select</Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        selectSheet: (id) => dispatch({type: SELECT_SPREADSHEET, payload: {id}})
    };
}

ChooseSheetScreen = withRouter(connect(mapStateToProps, mapDispatchToProps)(ChooseSheetScreen));
export {ChooseSheetScreen};