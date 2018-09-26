import React, { Component } from 'react';
import Calendar from './components/Calendar';
import './App.css';
import styled from "styled-components";

const AppWrapper = styled.div`
    text-align:center;
`;

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <header>
                    <div id="logo">
                        <span className="icon">date_range</span>
                        <span>
              react<b>calendar</b>
            </span>
                    </div>
                </header>
                <main>
                    <Calendar />
                </main>
            </AppWrapper>
        );
    }
}

export default App;
