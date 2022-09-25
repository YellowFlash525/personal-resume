import styled from "styled-components";
import { StyledSidebar } from "../styles/Sidebar";
import { StyledMainContent } from "../styles/MainContent";

export const AppContainer = styled.div`
  text-align: center;
  max-width: 1400px;
  padding: 20px 16px;
  display: flex;
  background-color: #eaeaea;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  ${StyledSidebar} {
    width: 100%;
  }

  ${StyledMainContent} {
    width: 100%;
  }

  @media only screen and (min-width: 479px) {
    ${StyledSidebar} {
      width: 80%;
    }

    ${StyledMainContent} {
      width: 80%;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: unset;

    ${StyledSidebar} {
      width: 40%;
    }

    ${StyledMainContent} {
      width: 60%;
    }
  }
`;
