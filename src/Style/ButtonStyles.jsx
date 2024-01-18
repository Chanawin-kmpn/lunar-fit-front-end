import { Link } from "react-router-dom";
import styled from "styled-components";

const longButton = `
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    padding-block: 0.625rem;
    border-radius: 10px;
`;

const lightTheme = `
${longButton}
color: #151718;
border: 2px solid #151718;
`;

const darkTheme = `
${longButton}
color: #ECF229;
background: #151718;
`;

const LightLink = styled(Link)`
  ${lightTheme}
`;

const DarkLink = styled(Link)`
  ${darkTheme}
`;
export { LightLink, DarkLink };