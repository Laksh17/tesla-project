import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>
                        {props.title}
                    </h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftButtonText}
                        </LeftButton>
                        {props.rightButtonText &&
                            <RightButton>
                                {props.rightButtonText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="./images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
    z-index: 0;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url("./images/${props.bgImage}")`};
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ItemText = styled.div`
    z-index: 10;
    padding-top: 15vh;
    text-align: center;
    font-size: 20px;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin: 8px;
`
// Inherit Left Buttons stuff to the right button
const RightButton = styled(LeftButton)`
    background-color: #EEEEEE;
    opacity: 0.65;
    color: #121212;
`
const DownArrow = styled.img`

    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`
const Buttons = styled.div`

`
