import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        background: ${(props) => props.theme.bg}
    }
`;
