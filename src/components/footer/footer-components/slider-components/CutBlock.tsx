import React, {useCallback, useEffect, useState} from 'react'
import {useMousePosition} from "../../../../hooks/useMousPosition";
import {widthLeftToPx} from "../../../../helpers";
import {setCutModifiedParameters} from "../../../../store/actions/audio";
import {useDispatch} from "react-redux";
import ICutBlock from "../../../../interface/ICutBlock";
import * as Styled from './audioCutBLock'


const CutBlock: React.FC<ICutBlock> = ({cut: {styles, id}}) => {
    const dispatch = useDispatch()
    const [isChangeCutWidth, setIsChangeCutWidth] = useState(false)
    const [widthHeight, setWidthHeight] = useState({...styles})
    const mouseXPosition = useMousePosition()
    const changeWidth = useCallback(() => {
            const {width} = widthLeftToPx({width: mouseXPosition})
            setWidthHeight({width, left: styles.left})
        },
        [mouseXPosition, styles.left],
    );


    useEffect(() => {
        if (isChangeCutWidth) {
            changeWidth()
        }

    }, [changeWidth, isChangeCutWidth]);

    const onChangeMusicCutWidth = () => {
        setIsChangeCutWidth(true)
    }
    const ofChangeMusicCutWidth = () => {
        setIsChangeCutWidth(false)
        dispatch(setCutModifiedParameters({
            id, styles: widthHeight
        }))
    }


    return (
        <Styled.AudioCutBlock {...widthHeight}>
            <Styled.AudioLeftRightWidthConfig>
                {'<'}
            </Styled.AudioLeftRightWidthConfig>
            <Styled.AudioCutCentral/>
            <Styled.AudioLeftRightWidthConfig
                onMouseDown={onChangeMusicCutWidth}
                onMouseUp={ofChangeMusicCutWidth}
            >
                {'>'}

            </Styled.AudioLeftRightWidthConfig>
        </Styled.AudioCutBlock>
    )

}

export default CutBlock
