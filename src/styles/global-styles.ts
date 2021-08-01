import { createGlobalStyle } from "styled-components";
import { devices } from "./devices";
import { colors, fonts } from "./variables";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
} 
html, 
body {  
        background: ${colors.primary};
        color: #333;
        font-family: ${fonts.catamaran};
        font-size: 14px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;

        @media ${devices.tablet} {
        font-size: 16px;
        }
    }
   
    button {
        border: none;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    p {
        line-height: 1.4em;
    }

    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;
}
`;
