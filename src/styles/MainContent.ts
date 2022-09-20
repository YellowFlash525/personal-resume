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

export const StyledMainInfo = styled.div`
  ${Container}
`;

export const StyledBlockListingContainer = styled.div`
  margin-bottom: 40px;

  h2 {
    font-size: 15px;
    font-weight: 700;
    position: relative;
    color: #2a2a2a;
    margin-bottom: 40px;
  }
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
  display: flex;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
`;

export const StyledBlockListingItemName = styled.div`
  font-size: 18px;
  position: relative;
  text-align: right;
  width: 50%;
  margin-right: 59px;

  &:before {
    background: #ffd42d;
    border: 4px solid #fff;
    content: " ";
    height: 10px;
    position: absolute;
    right: -2.1em;
    top: 1px;
    width: 10px;
    border-radius: 50%;
  }

  &:nth-child(1)::before {
    background: #2a2a2a;
  }

  &:nth-child(3)::before {
    background: #2a2a2a;
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
  }
`;

export const StyledBlockListingItemDetail = styled.div`
  position: relative;
  text-align: left;
  width: 50%;

  p {
    margin: 0;
  }
`;
