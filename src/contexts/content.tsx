import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/content/App.tsx';
import { log } from '../utils/logger.ts';

const moduleName = 'content script';
log({ logType: 'info', moduleName, message: 'loaded' });

// render the app into the host web page
// - isolated context
const root: HTMLDivElement = document.createElement('div');
root.id = 'content-root';
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
