import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
            <Slide>
                <Text>Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. Very Nice. </Text>
                <Name>@Aleksas.</Name>
            </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
            
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
border: 1px solid red;
max-width: 500px;
display: flex;
flex-direction: column;
align-items: center;


`
const Text = styled.p`

`

const Name = styled. span`

`

const Slide = styled.div`
max-width: 500px;
text-align: center;
`


const Pagination = styled.div`
span{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: deeppink;
}
`