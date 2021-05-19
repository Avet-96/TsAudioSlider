import React, {FC} from 'react'
import * as Styled from './styled-main/text-changed'

const TextChangesBlock: FC = () => {
    return (<Styled.TextsBlock>
        <Styled.InputBlo>
            <Styled.InputIconBlock><i className="fas fa-pen"/></Styled.InputIconBlock>
            <Styled.InputBlock placeholder='Your project name'/>
        </Styled.InputBlo>
        <Styled.TextStyleBlock>
            <Styled.Text>
                T
            </Styled.Text>
            <Styled.TextSelect>
                <Styled.SelectOptions>Text</Styled.SelectOptions>
            </Styled.TextSelect>

        </Styled.TextStyleBlock>

    </Styled.TextsBlock>)
}

export default TextChangesBlock
