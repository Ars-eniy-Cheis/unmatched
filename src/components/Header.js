import React from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/HeaderStyle.css';

function Header(props) {
    const navigate = useNavigate();
    return (

    <header id="app-header" className="app-header">

        <div className="background-container">
            <div id="background-back" className="background"></div>
            <div id="background-front" className="background"></div>
        </div>

        <div className="header-content">
            <div id="small-toolbar" className="app-toolbar">

                <div className="icon-button">
                    <div className="icon">
                        <i className="material-icons">menu</i>
                    </div>
                </div>

                <div id="small-title" className="small-title">Unmatched</div>
                <div className="icon-button">
                    <div className="icon">
                        <i className="material-icons">search</i>
                    </div>
                </div>

                <div className="icon-button">
                    <div className="icon">
                        <i className="material-icons">more_vert</i>
                    </div>
                </div>

            </div>

            <div id="large-toolbar" className="app-toolbar tall">
                <div id="large-title" className="large-title">Unmatched</div>
            </div>
        </div>
    </header>
);
}

export {Header}