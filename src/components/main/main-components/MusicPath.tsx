import React, {FC} from 'react'
import * as Styled from './styled-main/musicpath'

const MusicPath: FC = () => {
    return (
        <Styled.PathBlock>
            <Styled.Cosed>
                <i className="fas fa-trash"/>
            </Styled.Cosed>
            <Styled.Input type='text'/>
            <Styled.StartEnd>
                <span>start <Styled.TimeBlock>00:00:00</Styled.TimeBlock></span>
                <span>|</span>
                <span>end  <Styled.TimeBlock>00:00:00</Styled.TimeBlock></span>
            </Styled.StartEnd>
        </Styled.PathBlock>

    )
}

export default MusicPath
