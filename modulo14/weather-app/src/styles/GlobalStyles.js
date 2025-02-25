import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #e0f7fa;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`;

export default GlobalStyles;
