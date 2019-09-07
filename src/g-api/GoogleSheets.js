
function api(){
    return window.gapi.client.sheets;
}

function getSpreadsheet(spreadsheetId, range) {
    return api().spreadsheets.values.get({
        spreadsheetId,
        range
    });
}

function all() {
    api().spreadsheets.get()
        .then(console.log);
}

export default {
    all,
    getSpreadsheet,
};