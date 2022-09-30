import { StyledList, StyledListItem, StyledTitle, StyledDescription } from '../styles/List';
import React from 'react';
import {
    StyledMainContent,
    StyledBlockListing,
    StyledBlockListingItem,
    StyledBlockListingContainer,
    StyledMainInfo,
    StyledBlockListingTitle,
    StyledBlockListingItemName,
    StyledBlockListingItemDetail,
    StyledMainContentWrapper,
    StyledResumeClosure
} from '../styles/MainContent';

const MainContent: React.FC = () => (
    <StyledMainContent>
        <StyledMainContentWrapper>
            <StyledMainInfo>
            <h1>Kamil Wójcik</h1>
            <h2>Front-End Developer</h2>
            </StyledMainInfo>
            <StyledBlockListingContainer>
                <StyledBlockListingTitle>Work Experience</StyledBlockListingTitle>
                <StyledBlockListing>
                    <StyledBlockListingItem>
                        <StyledBlockListingItemName isOdd>
                            <span>
                                May 2021
                                <em>
                                    Current
                                </em>
                            </span>
                            <h3>Wunderman Thompson Technology
                                (formerly Cognifide Polska)
                            </h3>
                            <h4>
                                Senior Frontend Developer
                            </h4>
                        </StyledBlockListingItemName>
                        <StyledBlockListingItemDetail>
                            <StyledTitle>
                                Project for Ford Motor Company as UI lead for E-commerce application where customers can configure their vehicle, finance it and finalize their purchase without leaving their homes. 
                            </StyledTitle>
                            <StyledDescription>Stack involves AEM 6.5, SPA Editor with React, Redux, Redux-Saga, Styled Components, Jest, React Testing Library, Cypress, Java</StyledDescription>
                        </StyledBlockListingItemDetail>
                    </StyledBlockListingItem>
                    <StyledBlockListingItem>
                        <StyledBlockListingItemName>
                            <span>
                                December 2020 - April 2021
                            </span>
                            <h3>Wunderman Thompson Technology
                                (formerly Cognifide Polska)
                            </h3>
                            <h4>
                                Independent Frontend Developer
                            </h4>
                        </StyledBlockListingItemName>
                        <StyledBlockListingItemDetail>
                            <p></p>
                        </StyledBlockListingItemDetail>
                    </StyledBlockListingItem>
                    <StyledBlockListingItem>
                        <StyledBlockListingItemName isOdd>
                            <span>
                                November 2019 - December 2020
                            </span>
                            <h3>Cognifide Polska</h3>
                            <h4>
                                Independent Frontend Developer
                            </h4>
                        </StyledBlockListingItemName>
                        <StyledBlockListingItemDetail>
                            <StyledList>
                                <StyledListItem>
                                    <StyledTitle>Project for United Healthcare that was focused on delivering UHC homepage with couple subpages and with react application responsible for displaying tabular data fetched from api.</StyledTitle>
                                    <StyledDescription>Stack involves AEM 6.5, React, Javascript, SCSS, Java</StyledDescription>
                                </StyledListItem>
                                <StyledListItem>
                                    <StyledTitle>Project for British Telecom Openreach whose purpose was to provide a new styling for Opeanreach main site and subsites. </StyledTitle>
                                    <StyledDescription>Stack involves AEM 6.5, Javascript, jQuery, SCSS, Java</StyledDescription>
                                </StyledListItem>
                                <StyledListItem>
                                    <StyledTitle>Internal Project Cogboard is tool that provides team with a continuous information about IT project delivery status (application build, metrics, sonarqube, aet etc.)</StyledTitle>
                                    <StyledDescription>Stack involves React, Redux, Styled Components, Material-UI, Jest, Kotlin</StyledDescription>
                                </StyledListItem>
                            </StyledList>
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
                            <StyledTitle>
                                Project for Ford Motor Company as UI lead for E-commerce application with dashboard view for Ford clients, which contain information about purchased car, allow to buy subscribtions, renew the car warranties and buy additional extras.
                            </StyledTitle>
                            <StyledDescription>Stack involves AEM 6.4 (Classic UI), React, Redux, Redux-Thunk, SCSS, Jest</StyledDescription>
                        </StyledBlockListingItemDetail>
                    </StyledBlockListingItem>
                    <StyledBlockListingItem>
                        <StyledBlockListingItemName isOdd>
                            <span>
                                July 2017 - July 2018
                            </span>
                            <h3>Cognifide Polska</h3>
                            <h4>
                                Frontend Intern
                            </h4>
                        </StyledBlockListingItemName>
                        <StyledBlockListingItemDetail>
                            <StyledList>
                                <StyledListItem>
                                    <StyledTitle>Project for Vodafone Group which was based on the implementation of a dozen or so pages for a CIoT sector of Vodafone telecommunications company.</StyledTitle>
                                    <StyledDescription>Stack involves AEM 6.4, Strudel.js, jQuery, SCSS, Java</StyledDescription>
                                </StyledListItem>
                                <StyledListItem>
                                    <StyledTitle>Project for Colgate-Palmolive Company that was focused on developing Colgate homepage with few additional pages and an application for keeping data about dogs/cats, potential treatment and information about their recommended food.</StyledTitle>
                                    <StyledDescription>Stack involves AEM 6.3, AngularJS, Javascript, SCSS, Java</StyledDescription>
                                </StyledListItem>
                                <StyledListItem>
                                    <StyledTitle>Project for Virgin Australia about Velocity Frequenlty Flyer loyalty program where the main goal was to create an application for users who wanted to participate in the program. I was mainly responsible for the development accessibility up to the AAA level of the WCAG standard.</StyledTitle>
                                    <StyledDescription>Stack involves AEM 6.3, AngularJS, Javascript, SCSS, Java</StyledDescription>
                                </StyledListItem>
                                <StyledListItem>
                                    <StyledTitle>Project for Colgate-Palmolive Company whose purpose was to provide a large number of pages related to the area of dog and cat care for around 20 markets.</StyledTitle>
                                    <StyledDescription>Stack involves AEM 6.3, Javascript, jQuery, SCSS, Java</StyledDescription>
                                </StyledListItem>
                            </StyledList>
                        </StyledBlockListingItemDetail>
                    </StyledBlockListingItem>
                </StyledBlockListing>
            </StyledBlockListingContainer>
            <StyledBlockListingContainer>
                <StyledBlockListingTitle>Education</StyledBlockListingTitle>
                <StyledBlockListing>
                    <StyledBlockListingItem>
                        <StyledBlockListingItemName isOdd>
                            <span>
                                2018 - 2019
                            </span>
                            <h3>Adam Mickiewicz University in Poznań</h3>
                            <h4>
                                Master Degree - Computer Science
                            </h4>
                        </StyledBlockListingItemName>
                        <StyledBlockListingItemDetail>
                            <StyledTitle>Specialization: Information and Internet Technologies</StyledTitle>
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
                            <StyledTitle>Specialization: Information and Internet Technologies</StyledTitle>
                        </StyledBlockListingItemDetail>
                    </StyledBlockListingItem>
                </StyledBlockListing>
            </StyledBlockListingContainer>
        </StyledMainContentWrapper>
        <StyledResumeClosure>
            I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
        </StyledResumeClosure>
    </StyledMainContent>
);

export default MainContent;
