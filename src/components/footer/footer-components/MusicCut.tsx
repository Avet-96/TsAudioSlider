import React, {FC} from 'react'
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
    const addNewCut = () => {
        dispatch(setNewCut(chunkStartEnd))
        dispatch(setNewCutPosition(chunkStartEnd))
    }

    return (
        <Styled.SliderCut>
            {cuts && cuts.map((cut: ISetCutPos) => <CutBlock cutList={cut} key={cut.id}/>)}
            <Styled.Add onClick={addNewCut}>
                + add subtitle
            </Styled.Add>
        </Styled.SliderCut>
    )
}

export default MusicCut
