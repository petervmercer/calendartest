import styled, {injectGlobal, css} from 'styled-components';

injectGlobal`
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
    
    .icon {
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
    }
    
    * {
        box-sizing: border-box;
    }

body {
    font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5;
    color: #777;
    background: #f9f9f9;
    position: relative;
}
    
    `;