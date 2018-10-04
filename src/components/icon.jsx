import styled from 'styled-components';

const AppIconSpan = styled.span`

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

export default AppIconSpan;