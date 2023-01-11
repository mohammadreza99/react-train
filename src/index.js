// this import not necessary from react > 17. but here we import it to use strict mode.
import React from 'react';
import ReactDom from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import './assets/css/style.scss';
import App from "./App";
import Counter from "./pages/Counter.func";
import ContactList from "./pages/ContactList";
import ContactModify from "./pages/ContactModify";
// import Counter from "./pages/Counter.class";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/counter" element={<Counter/>}/>
                    <Route path="/contact-list" element={<ContactList/>}/>
                    <Route path="/contact-modify" element={<ContactModify/>}/>
                    <Route path="/" element={<Navigate to="/counter"/>}/>
                    <Route path="*" element={<h2 className="p-3">Not Found!</h2>}/>
                </Route>
                {/*<Route path="/auth" element={<Login/>}/>*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
