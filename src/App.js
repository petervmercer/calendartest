import React, {Component} from 'react';
import Calendar from './components/Calendar';
//import './App.css';
import styled from "styled-components";
import './styles/Theme/globalStyle';

const AppWrapper = styled.div`
    text-align:center;
`;

const AppHeader = styled.div`
    display: block;
    width: 100%;
    padding: 1.75em 0;
    border-bottom: 1px solid #f9f9f9;
    background: #fff;
    padding-right: .25em;
`;

const AppLogo = styled.div`
padding-right: .25em;
`;

const AppIcon = styled.span`

@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
    padding-right: .25em;
    font-family: 'Material Icons', serif;
    font-style: normal;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
    
    font-size: 175%;
    text-align: center;
    color: #1a8fff;
    line-height: 1;
     
    cursor: pointer;
    transition: .15s ease-out;
    
    &:hover {
        transform: scale(1.75);
        transition: .25s ease-out;
        color: #1a8fff;
    }
    
    &:first-of-type {
        margin-left: 1em;
    }
    
    &::last-of-type {
        margin-right: 1em;
    }
    
    
    
`;

const AppLogoText = styled.span`
font-size: 175%;
    text-align: center;
    color: #1a8fff;
    line-height: 1;
`;

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <AppHeader>
                    <AppLogo id="logo">
                        <AppIcon >date_range</AppIcon>
                        <AppLogoText>
                            react<b>calendar</b>
                        </AppLogoText>
                    </AppLogo>
                </AppHeader>

            </AppWrapper>
        );
    }
}

/*
</AppHeader>
                <main>
                    <Calendar/>
                </main>


 */

export default App;
