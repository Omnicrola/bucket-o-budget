import * as React from "react";
import {connect} from "react-redux";
import GoogleSheets from "../g-api/GoogleSheets";
import {selectSpreadsheetId} from "../middleware/selectors";
import {Fragment} from "react";


function formatDate(date){
    return `${date.getUTCMonth()}-${date.getUTCDate()}-${date.getUTCFullYear()}`;
}

const HistoryRow = ({entry}) => {
    return (
        <Fragment>
            <div className="amount">{entry.amount}</div>
            <div className="date">{formatDate(entry.date)}</div>
            <div className="note">{entry.note}</div>
        </Fragment>
    );
};

class HistoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        }
    }

    componentDidMount() {
        GoogleSheets.getSpreadsheet(this.props.spreadsheetId, 'A4:C250')
            .then(response => {
                const entries = response.result.values
                    .reverse()
                    .map(row => {
                        return {
                            amount: row[0],
                            date: new Date(row[1]),
                            note: row[2]
                        };
                    });
                this.setState({entries})
            });
    }

    render() {
        return (
            <div className="screen">
                <h1>History</h1>
                <div className="history-list">
                    {this.state.entries.map(entry => <HistoryRow entry={entry}/>)}
                </div>
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

HistoryScreen = connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
export {HistoryScreen};