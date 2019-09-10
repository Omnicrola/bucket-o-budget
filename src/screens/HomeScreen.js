import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {selectSpreadsheetId} from "../middleware/selectors";
import GoogleSheets from "../g-api/GoogleSheets";
import {Button, TextField} from "@material-ui/core";
import {DatePicker} from '@material-ui/pickers';
import {ADD_BUDGET_ENTRY} from "../actions/ActionTypes";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                selectedDate: Date.now(),
                amount: 0.0,
            },
            errors: {}
        };
        this.addNewEntry = this.addNewEntry.bind(this);
    }

    componentDidMount() {
        if (!this.props.spreadsheetId) {
            this.props.history.push('/choose-sheet')
        } else {
            GoogleSheets.getBucketBudget(this.props.spreadsheetId)
                .then(data => this.setState({data}));
        }
    }

    validate() {
        if (!this.state.amount || this.state.amount < 0) {
            this.setState({errors: {...this.state.errors, amount: 'Must be a valid dollar amount'}})
            return false;
        }
        return true;
    }

    addNewEntry() {
        if (this.validate()) {
            this.props.addEntry({
                amount: this.state.amount,
                selectedDate: this.state.date,
                note: this.state.note
            });
        }
    }

    render() {

        return (
            <div className="screen">
                <h1>Add Entry</h1>
                <Button variant="text"
                        onClick={() => this.setState({expanded: !this.state.expanded})}>
                    <span><strong>Budget Left: </strong>{this.state.data.balance}</span>
                </Button>
                {this.state.expanded && <span><strong>Budget:</strong>{this.state.data.budget}</span>}
                <div className="add-entry-form">
                    <TextField
                        label="Amount"
                        value={this.state.amount}
                        error={this.state.errors.amount}
                        onChange={e => this.setState({amount: e.target.value})}
                        type="number"
                        InputLabelProps={{shrink: true}}
                    />
                    <DatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date"
                        format="MM/DD/YYYY"
                        value={this.state.selectedDate}
                        onChange={e => console.log(e)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <TextField
                        id="standard-name"
                        label="Note"
                        value={this.state.note}
                        onChange={e => this.setState({note: e.target.value})}
                        margin="normal"
                    />
                    <Button variant="contained"
                            color="primary"
                            onClick={this.addNewEntry}>Add</Button>

                </div>
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
    return {
        addEntry: payload => dispatch({type: ADD_BUDGET_ENTRY, payload})
    };
}

HomeScreen = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));
export {HomeScreen};