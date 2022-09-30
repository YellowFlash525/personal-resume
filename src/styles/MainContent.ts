import styled, { css } from "styled-components";
import { Container } from "./General";

interface StyledBlockListingItemInterface {
  isOdd?: boolean;
}

export const StyledBlockElement = css`
  &:before {
    background: #ffd42d;
    content: "";
    height: 8px;
    left: 50%;
    position: absolute;
    top: -20px;
    width: 20px;
    transform: translate3d(-50%, 0, 0);
  }
`;

export const StyledMainContent = styled.div`
  font-family: "Roboto Slab", "Helvetica", "Arial", sans-serif;
  background-color: white;
  position: relative;

  h1 {
    font-size: 55px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #2a2a2a;
    line-height: 22px;
  }

  h2 {
    font-size: 20px;
    color: #999999;
    font-weight: 300;
    line-height: 22px;
  }

  &:before {
    background: #ffd42d;
    content: "";
    height: 18px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
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

export const StyledMainContentWrapper = styled.div`
  padding: 80px 40px;

  @media only screen and (min-width: 992px) {
    padding: 80px;
  }
`;

export const StyledMainInfo = styled.div`
  ${Container}
`;

export const StyledBlockListingContainer = styled.div`
  margin-bottom: 80px;

  h2 {
    font-size: 15px;
    font-weight: 700;
    position: relative;
    color: #2a2a2a;
    margin-bottom: 40px;
  }
`;

export const StyledBlockListingTitle = styled.h2`
  ${StyledBlockElement}

  font-size: 15px;
  font-weight: 700;
  display: inline-block;
  position: relative;
  text-transform: uppercase;
`;

export const StyledBlockListing = styled.div`
  padding: 60px 0 20px 0;
  position: relative;

  &:after {
    background-color: #eaeaea;
    content: " ";
    height: 100%;
    left: 49.9%;
    position: absolute;
    top: 0;
    width: 1px;
    z-index: 0;
  }
`;

export const StyledBlockListingItem = styled.div`
  display: flex;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
`;

export const StyledBlockListingItemName = styled.div<StyledBlockListingItemInterface>`
  font-size: 18px;
  position: relative;
  text-align: right;
  width: 50%;
  margin-right: 59px;

  &:before {
    background: ${({ isOdd }) => (isOdd ? "#2a2a2a" : "#ffd42d")};
    border: 4px solid #fff;
    content: " ";
    height: 10px;
    position: absolute;
    right: -2.1em;
    top: 1px;
    width: 10px;
    border-radius: 50%;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  h3,
  h4,
  span {
    margin: 0;
    font-weight: 400;
    line-height: 22px;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 15px;
  }

  span {
    color: #999999;
    font-size: 13.5px;

    em {
      background: #ffd42d;
      border-radius: 3px;
      color: #2a2a2a;
      font-size: 12.5px;
      font-weight: 400;
      margin-left: 10px;
      padding: 2px 7px;
      position: relative;
      top: -1px;
      position: relative;

      &:before {
        border-color: transparent #ffd42d;
        border-style: solid;
        border-width: 6px 5px 6px 0;
        content: "";
        display: block;
        left: -4px;
        position: absolute;
        top: 4px;
        width: 0;
        z-index: 0;
      }
    }
  }
`;

export const StyledBlockListingItemDetail = styled.div`
  position: relative;
  text-align: left;
  width: 50%;
`;

export const StyledResumeClosure = styled.p`
  text-align: left;
  margin-bottom: 40px;
  padding: 15px 15px 0;
  font-size: 13px;
  color: #999999;
`;
