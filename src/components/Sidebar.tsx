import React from 'react';
import { StyledSidebar, StyledSidebarPhoto } from '../styles/Sidebar';

const Sidebar = () => (
    <StyledSidebar>
        <StyledSidebarPhoto>
            <img src="./avatar.jpg" alt="Avatar" />
        </StyledSidebarPhoto>
    </StyledSidebar>
);

export default Sidebar;
