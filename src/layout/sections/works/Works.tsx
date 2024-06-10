import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from './../../../assets/images/proj-1-.jpg'
import timerlImg from './../../../assets/images/proj-2-.jpg'


const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]


export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Work</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper>
                <Work title={"Social Network"} 
                text={"OOOOOOOOOOOOOOOOOOOOO"} 
                src={socialImg}/>
                <Work title={"Timer"} 
                text={"AAAAAAAAAAAAAAAAAAAAAAA"} 
                src={timerlImg}/>

            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
min-height: 100vh;
background-color: #deefff;
`