import React from "react";


import * as Styled from '../footer-styled/instruments'

const Instruments = () => {
    return (
        <Styled.InsBlock>
            <Styled.ZoomButtons>
                <Styled.ZoomBtn left><i className="fas fa-search-minus"/></Styled.ZoomBtn>
                <Styled.ZoomBtn><i className="fas fa-search-plus"/></Styled.ZoomBtn>
            </Styled.ZoomButtons>
            <Styled.PlayerButtonsGroup>
                <Styled.PrevNext>
                    <Styled.Btn>-1s</Styled.Btn>
                    <Styled.Btn><i className="fas fa-angle-double-left"/></Styled.Btn>
                </Styled.PrevNext>
                <Styled.Play><i className="fas fa-play"/></Styled.Play>
                <Styled.PrevNext>
                    <Styled.Btn><i className="fas fa-angle-double-right"/></Styled.Btn>
                    <Styled.Btn>+1s</Styled.Btn>
                </Styled.PrevNext>
            </Styled.PlayerButtonsGroup>
            <Styled.TimerBlock>
                <span>00:00:00</span>
            </Styled.TimerBlock>
        </Styled.InsBlock>
    )
}
export default Instruments
