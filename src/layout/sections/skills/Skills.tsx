import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper>
                <Skill iconId={"codeSvg"} 
                    title={"HTML5"} 
                    description={"‘War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace.’"}/>
                    
                <Skill iconId={"cssSVG"} 
                    title={"CSS3"} 
                    description={"‘Freedom is slavery. Freedom is slavery. Freedom is slavery. Freedom is slavery. Freedom is slavery. Freedom is slavery. Freedom is slavery. Freedom is slavery.’"}/>

                <Skill iconId={"reactSVG"} 
                    title={"REACT"} 
                    description={"‘Ignorance is strength. Ignorance is strength. Ignorance is strength. Ignorance is strength. Ignorance is strength. Ignorance is strength. Ignorance is strength. Ignorance is strength.’"}/>

                <Skill iconId={"codeSvg"} 
                    title={"HTML5"} 
                    description={"‘War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace.’"}/>

                <Skill iconId={"codeSvg"} 
                    title={"HTML5"} 
                    description={"‘War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace.’"}/>

                <Skill iconId={"codeSvg"} 
                    title={"HTML5"} 
                    description={"‘War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace. War is peace.’"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
background-color: #ffe5e4;
min-height: 100vh;

`