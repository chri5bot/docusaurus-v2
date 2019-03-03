import { createGlobalStyle } from "styled-components"

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Lato');

    html {
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        line-height: 22px;
        height: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        margin:0;
        padding:0;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin:0;
        padding:0;
        height: 100%
    }

    #___gatsby, #___gatsby > div {
        height: 100%;
        margin:0;
        padding:0;
    }
    
`
