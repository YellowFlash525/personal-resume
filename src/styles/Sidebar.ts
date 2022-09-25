import styled from "styled-components";
import { StyledBlockElement } from "./MainContent";

export const StyledSidebar = styled.div`
  background-color: white;
  position: relative;

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
  font-family: "Roboto Slab", "Helvetica", "Arial", sans-serif;
  font-size: 15px;
  font-weight: 700;
  position: relative;
  color: #2a2a2a;
  margin-bottom: 40px;
  position: relative;
  margin-bottom: 40px;
  text-transform: uppercase;

  ${StyledBlockElement}
`;

export const StyledSidebarContent = styled.div`
  padding: 100px 40px;
`;

export const StyledSidebarIconList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: -3px 0 0;

  li {
    width: 20%;
    box-shadow: 0 0 1px #999999;

    &:hover {
      background-color: #ffd42d;
      transition: background-color 200ms ease-in-out;
    }
  }

  a {
    color: #2a2a2a;
    display: block;
    width: 100%;
  }

  img {
    width: 26px;
    height: 26px;
    padding: 16px 0;
  }
`;

interface StyledSidebarListInterface {
  customBullet?: boolean;
}

export const StyledSidebarList = styled.ul<StyledSidebarListInterface>`
  list-style: none;
  padding: 0;
  text-align: left;

  li {
    font-family: "Roboto Slab", "Helvetica", "Arial", sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
    color: #999999;

    ${({ customBullet }) =>
      !customBullet &&
      `
          &::before {
            content: "\\27A4";
            margin-right: 5px;
            color: #ffd42d;
          }
    `};

    span {
      color: #2a2a2a;
    }
  }
`;
