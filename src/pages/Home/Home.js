import React from "react";
import styles from "./Home.module.css";

export const Home = () => {
    return(
        <div className="wrapper">
            <div className="irregular-verbs">
                <h1>irregulars verbs easy!</h1>
                <p>Learn irregulars verbs by our cards</p>
            </div>
            <div className="meet-our-cards">
                <h2>Meet our card</h2>
                <p>a font side</p>
                <div></div>
                <p>a back side</p>
                <div></div>
            </div>
            <div className="info">
                <h3>Create new cards and track your progress</h3>
                <ol>
                    <li>Use a special page for creating your own cards</li>
                    <li>On all cards pages filter cards by their status</li>
                </ol>
            </div>
        </div> 
    )
}