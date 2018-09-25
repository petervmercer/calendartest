import React, {Component} from 'react';
import logo from './logo.svg';
import styled, {keyframes, ThemeProvider} from 'styled-components';
import { theme1, theme2, Button } from './theme/globalStyle'
import ThemeSelect from './components/themeSelect'

const AppWrapper = styled.div`
    text-align:center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
  animation: ${rotate360} infinite 1.5s linear;
  }
`;
const AppHeader = styled.div`
  background-color: #222;
  height: 12rem;
  padding: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`;
const AppTitle = styled.h1`
  font-size: 1.3em;
`;
const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`;

const EmojiWrapper = styled.span.attrs({
    role: 'img'
})``;

const BigButt = Button.extend`
  height: 3rem;
  font-size: 2rem;
  width: 40vw;
  border-radius: 30px;
`;


class App extends Component {
    state = {
        theme: theme1
    }
    handleThemeChange = e => {
        let theme = e.target.value
        theme === 'theme1' ? (theme = theme1) : (theme = theme2)
        this.setState({ theme })
    }
    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <AppWrapper>
                    <AppHeader>
                        <AppLogo src={logo} alt="logo"/>
                        <AppTitle>Welcome to React</AppTitle>
                    </AppHeader>
                    <AppIntro>
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </AppIntro>
                    <AppIntro>
                        Components styled with <code>styled-components</code>{' '}
                        <EmojiWrapper aria-label="nail polish"/>
                    </AppIntro>
                    <ThemeSelect handleThemeChange={this.handleThemeChange} />
                    <Button>Normal Button</Button>
                    <Button primary>Primary Button</Button>
                    <BigButt>Big Button</BigButt>
                </AppWrapper>
            </ThemeProvider>
        );
    }
}

export default App;
