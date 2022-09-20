import React from 'react';
import { StyledMainContent, StyledBlockListing, StyledBlockListingItem, StyledBlockListingContainer, StyledMainInfo, StyledBlockListingTitle, StyledBlockListingItemName, StyledBlockListingItemDetail } from '../styles/MainContent';

const MainContent = () => (
    <StyledMainContent>
        <StyledMainInfo>
            <h1>Kamil Wójcik</h1>
            <h2>Front-End Developer</h2>
        </StyledMainInfo>
        <StyledBlockListingContainer>
            <StyledBlockListingTitle>About Me</StyledBlockListingTitle>
            <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ! “</p>
        </StyledBlockListingContainer>
        <StyledBlockListingContainer>
            <StyledBlockListingTitle>Work Experience</StyledBlockListingTitle>
            <StyledBlockListing>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>
                        <span>
                            May 2021 - current
                        </span>
                        <h3>Wunderman Thompson Technology (formerly Cognifide Polska)</h3>
                        <h4>
                            Senior Frontend Developer
                        </h4>
                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exerc.
							Irure dolor in reprehend incididunt labore et dolore magna aliqua. 
                        </p>
                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>
                        <span>
                            December 2020 - April 2021
                        </span>
                        <h3>Wunderman Thompson Technology (formerly Cognifide Polska)</h3>
                        <h4>
                            Independent Frontend Developer
                        </h4>
                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exerc.
							Irure dolor in reprehend incididunt labore et dolore magna aliqua. 
                        </p>
                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>
                        <span>
                            November 2019 - December 2020
                        </span>
                        <h3>Cognifide Polska</h3>
                        <h4>
                            Independent Frontend Developer
                        </h4>
                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exerc.
							Irure dolor in reprehend incididunt labore et dolore magna aliqua. 
                        </p>
                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>
                        <span>
                            July 2018 - November 2019
                        </span>
                        <h3>Cognifide Polska</h3>
                        <h4>
                            Junior Frontend Developer
                        </h4>
                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exerc.
							Irure dolor in reprehend incididunt labore et dolore magna aliqua. 
                        </p>
                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>
                        <span>
                            July 2017 - July 2018
                        </span>
                        <h3>Cognifide Polska</h3>
                        <h4>
                            Frontend Intern
                        </h4>
                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exerc.
							Irure dolor in reprehend incididunt labore et dolore magna aliqua. 
                        </p>
                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
            </StyledBlockListing>
        </StyledBlockListingContainer>
        <StyledBlockListingContainer>
            <StyledBlockListingTitle>Education</StyledBlockListingTitle>
             <StyledBlockListing>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>
                        <span>
                            2018 - 2019
                        </span>
                        <h3>Adam Mickiewicz University in Poznań</h3>
                        <h4>
                            Master Degree - Computer Science
                        </h4>
                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>
                        <p>Specialization: Information and Internet Technologies</p>
                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>
                        <span>
                            2014 - 2018
                        </span>
                        <h3>Adam Mickiewicz University in Poznań</h3>
                        <h4>
                            Bachelor Degree - Computer Science
                        </h4>
                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>
                        <p>Specialization: Information and Internet Technologies</p>
                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
            </StyledBlockListing>
        </StyledBlockListingContainer>
    </StyledMainContent>
);

export default MainContent;
