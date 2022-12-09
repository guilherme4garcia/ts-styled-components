// styles/globalStyles.js
import styled, { createGlobalStyle } from 'styled-components'


type Props = {
    inputColor: string;
}

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;

    }
    html, body {
        height: 100%;
    }

    .center {
        display: -webkit-flexbox;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        justify-content: center;
        margin: auto;
        height: 80vh;
    }
    .container {
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;

    }
    
    
`

export const Box = styled.div<Props>`
    
    color: ${(props) => props.inputColor};
`