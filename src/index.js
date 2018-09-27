import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ClickCounter from "./ClickCounter";
import ControlPanel from './component/ControlPanel'
import SampleButton from './component/sampleButton'

ReactDOM.render(
    <div>
        <ControlPanel/>
        <SampleButton/>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
