import React from 'react'
import * as Styled from './main-styles/subtiters'
import MusickPath from "./MusicPath";

const Subtiters = () => {
    return (
        <Styled.SubtitMain>
            <Styled.STitle>
                Subtitles
            </Styled.STitle>
            <Styled.Btn>
                + add subtitles
            </Styled.Btn>
            <MusickPath/>
            <Styled.Btn>
                + add subtitles
            </Styled.Btn>
        </Styled.SubtitMain>
    )
}

export default Subtiters
