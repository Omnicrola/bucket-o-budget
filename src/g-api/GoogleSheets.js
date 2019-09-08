function api() {
    return window.gapi.client.sheets;
}

function getSpreadsheet(spreadsheetId, range) {
    return api().spreadsheets.values.get({
        spreadsheetId,
        range
    });
}

function getBucketHistory(spreadsheetId) {
    return getSpreadsheet(spreadsheetId, 'A4:C250')
        .then(response => {
            return response.result.values
                .reverse()
                .map(row => {
                    return {
                        amount: row[0],
                        date: new Date(row[1]),
                        note: row[2]
                    };
                })
        });
}

function getBucketBudget(spreadsheetId) {
    return getSpreadsheet(spreadsheetId, 'A1:D3')
        .then(response => {
            const values = response.result.values;
            return {
                budget: values[0][1],
                balance: values[1][1],
                income: values[0][2],
                fixedCosts: values[1][2]
            };
        });
}

export default {
    getSpreadsheet,
    getBucketHistory,
    getBucketBudget,
};