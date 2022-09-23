import styled from "styled-components";
import { StyledBlockElement } from "./MainContent";

export const StyledSidebar = styled.div`
  background-color: white;
  position: relative;

  ul {
    list-style: none;
  }

  a {
    background: #ffd42d;
    color: #2a2a2a;
    height: 40px;
    width: 65px;
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    backface-visibility: hidden;
    position: relative;
    transition-property: color;
    transition-duration: 0.3s;
  }

  &:after {
    background: #ffd42d;
    content: "";
    height: 18px;
    left: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

export const StyledSidebarPhoto = styled.div`
  img {
    width: 100%;
  }
`;

export const StyledSidebarListContainer = styled.div`
  margin-bottom: 80px;
`;

export const StyledSidebarListTitle = styled.h2`
  position: relative;
  margin-bottom: 40px;

  ${StyledBlockElement}
`;

export const StyledSidebarContent = styled.div`
  padding: 100px 40px;
`;

export const StyledSidebarList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;
