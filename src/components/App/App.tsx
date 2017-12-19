import * as React from 'react';
import { connect } from 'react-redux';
import Link from "./Link";

const styles = require('./App.css');

const mapStateToProps = state => ({
    helloMessage: state.helloMessage
});

const App = ({helloMessage}: {helloMessage: string}) => (
    <div className={styles.App}>
        <h1>{helloMessage}</h1>
        <ul>
            <li>
                <Link href={''} text={'react'}/>
            </li>
            <li>
                <Link href={''} text={'redux'}/>
            </li>
            <li>
                <Link href={''} text={'typescript'}/>
            </li>
            <li>
                <Link href={''} text={'storybook'}/>
            </li>
            <li>
                <Link href={''} text={'jest'}/>
            </li>
        </ul>
    </div>
);

export default connect(mapStateToProps)(App);