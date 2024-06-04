import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/me-photo.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
            <div>
                <span>Hi There</span>
                <Name>I am Maryia Zinkevich.</Name>
                <MainTitle>A Web Developer.</MainTitle>
            </div>
            <Photo  src={photo} alt=""/>
        
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
min-height: 100vh;
background-color: #fff5e7; 
`

const Photo = styled.img`
width: 390px;
height: 388px;
object-fit: cover;
`

const MainTitle = styled.h1`
`

const Name = styled.h2`
`

// h1 is very necessary for promotion. ceo ai scrolling trough h1 tag and searching for separate words 
//that are usefull, that are known, that user wants exactly this to findAllByAltText.