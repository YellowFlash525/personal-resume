import React from 'react';
import { StyledMainContent, StyledBlockListing, StyledBlockListingItem, StyledBlockListingContainer, StyledMainInfo, StyledBlockListingTitle, StyledBlockListingItemName, StyledBlockListingItemDetail } from '../styles/MainContent';

const MainContent = () => (
    <StyledMainContent>
        <StyledMainInfo>
            <h1>Kamil Wójcik</h1>
            <h3>Front-End Developer</h3>
        </StyledMainInfo>
        <StyledBlockListingContainer>
            <StyledBlockListingTitle>About Me</StyledBlockListingTitle>
        </StyledBlockListingContainer>
        <StyledBlockListingContainer>
            <StyledBlockListingTitle>Work Experience</StyledBlockListingTitle>
            <StyledBlockListing>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>

                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>

                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
                <StyledBlockListingItem></StyledBlockListingItem>
                <StyledBlockListingItem></StyledBlockListingItem>
            </StyledBlockListing>
        </StyledBlockListingContainer>
        <StyledBlockListingContainer>
            <StyledBlockListingTitle>Education</StyledBlockListingTitle>
             <StyledBlockListing>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>

                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>

                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>

                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>

                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
            </StyledBlockListing>
        </StyledBlockListingContainer>
        <StyledBlockListingContainer>
            <StyledBlockListingTitle>Skills</StyledBlockListingTitle>
            <StyledBlockListing>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>

                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>

                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
                <StyledBlockListingItem>
                    <StyledBlockListingItemName>

                    </StyledBlockListingItemName>
                    <StyledBlockListingItemDetail>

                    </StyledBlockListingItemDetail>
                </StyledBlockListingItem>
            </StyledBlockListing>
        </StyledBlockListingContainer>
    </StyledMainContent>
);

export default MainContent;
