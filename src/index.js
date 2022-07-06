import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {MainPage} from './pages/MainPage'

const root = ReactDOM.createRoot(document.getElementById('root'));

const app = (<App/>);
const mainPage = (<MainPage/>);

const router = (

    <div>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={mainPage} />
                    <Route path="/app" element={app} />
                    <Route path="*" element={app} />
                </Routes>
            </div>
        </Router>
    </div>
);

root.render(router);
