import * as React from "react";
import { connect } from "react-redux";
import { HelloMessage } from "./../../components";
import Styled from "styled-components";

const mapStateToProps = state => ({
    helloMessage: state.helloMessage,
});

const DefaultList = Styled.ul`
    list-style: none;
`;

export const App = ({
    helloMessage,
    className,
}: {
    helloMessage: string;
    className: string;
}) => (
    <div className={className}>
        <HelloMessage>{helloMessage}</HelloMessage>
    </div>
);

export default Styled(connect(mapStateToProps)(App))`
    height: 100%;
    width: 100%;
    background-color: #DB7E82;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#0D152B;
`;
