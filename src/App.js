// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ModuleList from './components/ModulesListe';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ModuleList />
            </div>
        </Provider>
    );
}

export default App;