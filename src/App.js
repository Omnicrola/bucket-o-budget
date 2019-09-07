import React from 'react';
import './styles/App.css';
import {HomeScreen} from "./screens/HomeScreen";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HomeScreen/>
            </header>
        </div>
    );
}

export default App;
