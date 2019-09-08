const SHEET_TYPE = "mimeType='application/vnd.google-apps.spreadsheet'";

function getSpreadsheets() {
    return window.gapi.client.drive.files.list({
        q: SHEET_TYPE,
        fields: 'nextPageToken, files(id, name, modifiedTime, starred)',
        spaces: 'drive'
    }).then((r) => {
        return r.result.files;
    }).catch(e => {
        console.log(e);
    });
}

export default {
    getSpreadsheets
};