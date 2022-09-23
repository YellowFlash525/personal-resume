import {
    StyledSidebar,
    StyledSidebarContent,
    StyledSidebarPhoto,
    StyledSidebarListContainer,
    StyledSidebarListTitle,
    StyledSidebarList
} from '../styles/Sidebar';

const Sidebar: React.FC = () => (
    <StyledSidebar>
        <StyledSidebarPhoto>
            <img src="./avatar.jpg" alt="Avatar" />
        </StyledSidebarPhoto>
        {/* lista z ikonakimi i linkami */}
        <div> 
        </div>
        <StyledSidebarContent>
            <StyledSidebarListContainer>
                <StyledSidebarListTitle>Personal Info</StyledSidebarListTitle>
                <StyledSidebarList>
                    <li>
                        <span>Birthday: </span> 18.04.1995 
                    </li>
                    <li>
                        <span>Adress: </span> Hawelańska Street 6F, Apt. 45, 61-625 Poznań
                    </li>
                    <li>
                        <span>E-Mail: </span>kamil.wojcik.525@gmail.com
                    </li>
                    <li>
                        <span>Phone: </span> +48 881 945 780
                    </li>
                </StyledSidebarList>
            </StyledSidebarListContainer>
            <StyledSidebarListContainer>
                <StyledSidebarListTitle>Language</StyledSidebarListTitle>
                <StyledSidebarList>
                    <li>English <span>(Fluent and communicative)</span></li>
                    <li>Polish <span>(Advanced)</span></li>
                </StyledSidebarList>
            </StyledSidebarListContainer>
            <StyledSidebarListContainer>
                <StyledSidebarListTitle>Hobbies & Interests</StyledSidebarListTitle>
                <StyledSidebarList>
                    <li>English <span>(Fluent and communicative)</span></li>
                    <li>Polish <span>(Advanced)</span></li>
                </StyledSidebarList>
            </StyledSidebarListContainer>
        </StyledSidebarContent>
    </StyledSidebar>
);

export default Sidebar;
