import React from 'react';
import { useNavigate } from "react-router-dom";
import {Header} from "../components/Header";



function MainPage(props) {
    //const header = ();
    return (
        <div>
            <Header/>
            <MainPart/>
        </div>
    );
}

function MainPart(props){
    const navigate = useNavigate();
    return (
        <div >
            <input id="box" type="image" src={require("../images/GameBox.jpg")} alt="Box"/>
        </div>
    );
}

export {MainPage}