import styled from "styled-components";
import { Container } from "./General";

export const StyledMainContent = styled.div`
  font-family: "Roboto Slab", "Helvetica", "Arial", sans-serif;
  background-color: white;
  padding: 80px;
  position: relative;

  h1 {
    font-size: 55px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #2a2a2a;
    line-height: 22px;
  }

  h3 {
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

export const StyledMainInfo = styled.div`
  ${Container}
`;

export const StyledBlockListingContainer = styled.div`
  margin-bottom: 40px;
`;

export const StyledBlockListingTitle = styled.h2`
  font-size: 15px;
  font-weight: 700;
  display: inline-block;
  position: relative;
  text-transform: uppercase;

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
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
`;

export const StyledBlockListingItemName = styled.div``;

export const StyledBlockListingItemDetail = styled.div``;
