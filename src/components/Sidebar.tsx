import {
    StyledSidebar,
    StyledSidebarContent,
    StyledSidebarPhoto,
    StyledSidebarListContainer,
    StyledSidebarListTitle,
    StyledSidebarList,
    StyledSidebarIconList
} from '../styles/Sidebar';

const Sidebar: React.FC = () => (
    <StyledSidebar>
        <StyledSidebarPhoto>
            <img src="./images/avatar.jpg" alt="Avatar" />
        </StyledSidebarPhoto>
        <StyledSidebarIconList>
            <li>
                <a href="https://www.facebook.com/kamil.wojcik.90/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/facebook.svg" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/foxik525/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/instagram.svg" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/kamil-w%C3%B3jcik-459168139/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/linkedin.svg" alt="" />
                </a>
            </li>
            <li>
                <a href="https://github.com/YellowFlash525/" target="_blank" rel="noopener noreferrer">
                    <img src="./images/github.svg" alt="" />
                </a>
            </li>
            <li>
                <a href="mailto:kamil.wojcik.525@gmail.com">
                    <img src="./images/gmail.svg" alt="" />
                </a>
            </li>
        </StyledSidebarIconList>
        <StyledSidebarContent>
            <StyledSidebarListContainer>
                <StyledSidebarListTitle>Personal Info</StyledSidebarListTitle>
                <StyledSidebarList customBullet>
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
                <StyledSidebarListTitle>Skills</StyledSidebarListTitle>
                <StyledSidebarList>
                    <li><span>HTML5</span></li>
                    <li><span>CSS5 including SCSS</span></li>
                    <li><span>Javascript</span></li>
                    <li><span>jQuery</span></li>
                    <li><span>React</span></li>
                    <li><span>Redux</span></li>
                    <li><span>Redux-Saga</span></li>
                    <li><span>Redux-Thunk</span></li>
                    <li><span>Styled Components</span></li>
                    <li><span>Typscript</span></li>
                    <li><span>Vue 3</span></li>
                    <li><span>AEM</span></li>
                    <li><span>AEM SPA Editor</span></li>
                    <li><span>Accessibility</span></li>
                </StyledSidebarList>
            </StyledSidebarListContainer>
            <StyledSidebarListContainer>
                <StyledSidebarListTitle>Language</StyledSidebarListTitle>
                <StyledSidebarList>
                    <li><span>English</span> (Fluent and communicative)</li>
                    <li><span>Polish</span> (Native)</li>
                </StyledSidebarList>
            </StyledSidebarListContainer>
            <StyledSidebarListContainer>
                <StyledSidebarListTitle>Hobbies & Interests</StyledSidebarListTitle>
                <StyledSidebarList>
                    <li><span>Snooker</span></li>
                    <li><span>Basketball</span></li>
                    <li><span>Crossfit</span></li>
                    <li><span>Board Games</span></li>
                    <li><span>Travel</span></li>
                    <li><span>Bowling</span></li>
                    <li><span>Karting</span></li>
                </StyledSidebarList>
            </StyledSidebarListContainer>
        </StyledSidebarContent>
    </StyledSidebar>
);

export default Sidebar;
