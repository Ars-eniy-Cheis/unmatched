import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const app = (<App/>);

const router = (

    <div>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={app} />
                    <Route path="/App" element={app} />
                    <Route path="*" element={app} />
                </Routes>
            </div>
        </Router>
    </div>
);

root.render(router);
