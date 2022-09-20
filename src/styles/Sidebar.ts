import styled from "styled-components";

export const StyledSidebar = styled.div`
  background-color: white;

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
`;

export const StyledSidebarPhoto = styled.div`
  img {
    width: 100%;
  }
`;
