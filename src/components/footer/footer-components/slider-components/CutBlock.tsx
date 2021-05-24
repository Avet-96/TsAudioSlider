import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import * as Styled from './audioCutBLock'

import {useMousePosition} from "../../../../hooks/useMousPosition";
import {widthToPercent, leftToPercent} from "../../../../helpers";
import {saveStaticLeftParams, setCutModifiedParameters} from "../../../../store/actions/audio";
import ICutBlock, {ChangeParamType} from "../../../../interface/ICutBlock";


const CutBlock: React.FC<ICutBlock> = ({cut: {styles, id}}) => {
    const staticLeft = useSelector((state: { audio: { staticLeft: number } }) => state.audio.staticLeft)
    const [isChangeCutWidth, setIsChangeCutWidth] = useState(false)
    const [widthHeight, setWidthHeight] = useState({...styles})
    const [lRW, setLRW] = useState('')
    const mouseXPosition = useMousePosition()
    const dispatch = useDispatch()

    const changeWidth = useCallback(() => {
            const {width} = widthToPercent({
                width: styles.width, mouseXPosition, left: styles.left, staticLeft
            })
            setWidthHeight({width, left: styles.left})
        },
        [mouseXPosition, styles.left, styles.width, staticLeft]
    );
    const changeAudioCutPosition = useCallback(() => {
            const {left} = leftToPercent({left: styles.left, mousePosition: mouseXPosition, staticLeft})
            setWidthHeight({width: styles.width, left: left})

        },
        [mouseXPosition, styles.left, styles.width, staticLeft]
    );


    useEffect(() => {
        if (isChangeCutWidth) {
            lRW === 'changeWidthRight' ? changeWidth() : changeAudioCutPosition()
        }
    }, [changeAudioCutPosition, changeWidth, isChangeCutWidth, lRW]);

    const onChangeMusicCutWidth = (changeParam: ChangeParamType) => {
        setIsChangeCutWidth(true)
        setLRW(changeParam)
        dispatch(saveStaticLeftParams({mouseXPosition}))

    }
    const ofChangeMusicCutWidth = () => {
        setIsChangeCutWidth(false)
        console.log(widthHeight)
        dispatch(setCutModifiedParameters({
            id, styles: widthHeight
        }))
    }


    return (
        <Styled.AudioCutBlock {...widthHeight}>
            <Styled.AudioLeftRightWidthConfig>
                {'<'}
            </Styled.AudioLeftRightWidthConfig>
            <Styled.AudioCutCentral
                onMouseDown={() => onChangeMusicCutWidth('changeLeft')}
                onMouseUp={ofChangeMusicCutWidth}
            />
            <Styled.AudioLeftRightWidthConfig
                onMouseDown={() => onChangeMusicCutWidth('changeWidthRight')}
                onMouseUp={ofChangeMusicCutWidth}
            >
                {'>'}

            </Styled.AudioLeftRightWidthConfig>
        </Styled.AudioCutBlock>
    )

}

export default CutBlock
