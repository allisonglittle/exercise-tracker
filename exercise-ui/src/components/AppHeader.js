import React from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi';

function AppHeader() {
    return (
        <header className="App-header">
            <h1>
                <GiWeightLiftingUp className="App-logo" /> Exercise Log <GiWeightLiftingUp className="App-logo" />
            </h1>
        </header>
    );
}

export default AppHeader;