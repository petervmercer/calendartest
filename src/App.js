import React, {Component} from 'react';
import Calendar from './components/Calendar';
import AppIconSpan from './components/icon';
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

const AppLogoText = styled.span`
font-size: 175%;
    text-align: center;
    color: #1a8fff;
    line-height: 1;
`;

const Main = styled.div`
    display: block;
    margin: 0 auto;
    margin-top: 5em;
    max-width: 50em;
`;

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <AppHeader>
                    <AppLogo id="logo">
                        <AppIconSpan >date_range</AppIconSpan>
                        <AppLogoText>
                            react<b>calendar</b>
                        </AppLogoText>
                    </AppLogo>
                </AppHeader>
                <Main>
                    <Calendar/>
                </Main>

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
