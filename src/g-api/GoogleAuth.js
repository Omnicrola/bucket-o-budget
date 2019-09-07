const G_API_CONFIG = {
    apiKey: 'AIzaSyC3487yaZudkH5sXfW_5LO9J4S9l8AjGc8',
    clientId: '1089643582901-c87ts7t6n4adhn6740sbv0hhf9smgbbd.apps.googleusercontent.com',
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly'
};

function init(updateAuthStatus, errorCallback) {
    window.gapi.load('client:auth2', () => load(updateAuthStatus, errorCallback));
}

function load(updateAuthStatus, errorCallback) {
    window.gapi.client.init({
        ...G_API_CONFIG
    }).then(() => {
        const isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn;
        isSignedIn.listen(updateAuthStatus);
        updateAuthStatus(isSignedIn.get());
    }, errorCallback);
}

function signIn() {
    window.gapi.auth2.getAuthInstance().signIn();
}

function signOut() {
    window.gapi.auth2.getAuthInstance().signOut();
}

export default {
    init,
    signIn,
    signOut
}