import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
html,body {
    padding: 0;
    margin: 0;
    font-family: "DM Sans", -apple-system, Ubuntu, sans-serif;
  
}
*,*::before,*::after{
    box-sizing: border-box;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #000 !important;
}
`;
export default globalStyles;
