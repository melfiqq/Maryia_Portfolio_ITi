import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]


export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Work</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper>
                
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
min-height: 100vh;
background-color: #deefff;
`