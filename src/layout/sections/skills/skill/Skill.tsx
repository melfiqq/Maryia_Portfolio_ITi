import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillsPropsType = {
    iconId: string;
    title: string;
    description: string;
}

export const Skill = (props: SkillsPropsType) => {
    return (
        <StyledSkill>
           <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
         </StyledSkill>
    )
}

const StyledSkill = styled.div`
width: 30%;
background-color: rgba(255, 255, 255, 0.56);
margin: 10px;

`

const SkillTitle = styled.h3`
`

const SkillText = styled.p`
`

