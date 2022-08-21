import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import AccountList from './AccountList';

function App() {
    return (
        <>
            <Login />
            <AccountList />
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}