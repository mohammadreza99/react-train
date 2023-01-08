// this import not necessary from react > 17. but here we import it to use strict mode.
import React from 'react';
import ReactDom from 'react-dom/client';
import App from "./App";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
