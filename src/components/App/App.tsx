import * as React from "react";
import { connect } from "react-redux";
import Link from "./../Link";

const styles = require("./App.css");

const mapStateToProps = state => ({
    helloMessage: state.helloMessage,
    usedTechnologies: state.usedTechnologies
});

export const App = ({
    helloMessage, 
    usedTechnologies
}: {
    helloMessage: string, 
    usedTechnologies: {href: string, name: string}[]
}) => (
    <div className={styles.App}>
        <h1>{helloMessage}</h1>
        <ul>
            {usedTechnologies.map(x => (
                <li key={x.name}>
                    <Link key={x.name} href={x.href}>{x.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export const ConnectedApp = connect(mapStateToProps)(App);