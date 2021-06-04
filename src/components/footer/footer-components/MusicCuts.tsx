import React, {FC} from 'react'
import * as Styled from '../footer-styled/musicCut'
import CutBlock from "./slider-components/CutBlock";
import {useDispatch, useSelector} from "react-redux";
import {setNewCut} from "store/actions/audio";
import {IMusicCutType} from "interface/IMusicCuts";


const apiGetData = {
    start: 30,
    end: 56
}


const MusicCuts: FC = () => {
    const dispatch = useDispatch()
    const audioCuts = useSelector((state: IMusicCutType) => state.audio.audioCuts)

    const addNewMusicCut = () => {
        dispatch(setNewCut(apiGetData))
    }
    return (
        <Styled.SliderCut>
            {audioCuts.map((cut) => <CutBlock key={cut.id} cut={cut}/>)}
            <Styled.Add onClick={addNewMusicCut}>
                + add subtitle
            </Styled.Add>
        </Styled.SliderCut>
    )
}

export default MusicCuts

