import React, {FC, useState} from 'react'
import * as Styled from '../footer-styled/musicCut'
import CutBlock from "./slider-components/CutBlock";
import {useDispatch, useSelector} from "react-redux";
import {setNewCut, setNewCutPosition} from "../../../store/actions/audio";
import {ISetCutPos} from "../../../interface/StoreI/IReducers/IAudio";

const chunkStartEnd = {
    start: 0,
    end: 186,
}


const MusicCut: FC = () => {
    const dispatch = useDispatch()
    const cuts = useSelector((state: any) => state.audio.cutBlock)
    const [xCord, setXCord] = useState(NaN)

    const addNewCut = () => {
        dispatch(setNewCut(chunkStartEnd))
        dispatch(setNewCutPosition(chunkStartEnd))
    }

    return (
        <Styled.SliderCut onMouseOver={(e) => setXCord(e.clientX)}>
            {cuts && cuts.map((cut: ISetCutPos) => <CutBlock key={cut.id} posX={xCord}/>)}
            <Styled.Add onClick={addNewCut}>
                + add subtitle
            </Styled.Add>
        </Styled.SliderCut>
    )
}

export default MusicCut
