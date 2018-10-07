import {injectGlobal} from 'styled-components';

injectGlobal`
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
    
    
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