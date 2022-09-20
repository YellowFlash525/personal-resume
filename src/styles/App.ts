import styled from "styled-components";
import { StyledSidebar } from "../styles/Sidebar";
import { StyledMainContent } from "../styles/MainContent";

export const AppContainer = styled.div`
  text-align: center;
  max-width: 1400px;
  padding: 20px 16px;
  display: flex;
  background-color: #eaeaea;
  gap: 16px;

  ${StyledSidebar} {
    width: 35%;
  }

  ${StyledMainContent} {
    width: 65%;
  }
`;
