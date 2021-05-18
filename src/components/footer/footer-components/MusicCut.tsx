import React, {FC, useState} from 'react'
import * as Styled from '../footer-styled/musicCut'
import CutBlock from "./slider-components/CutBlock";
import {useDispatch, useSelector} from "react-redux";
import {setNewCut, setNewCutPosition} from "../../../store/actions/audio";
import {ISetCutPos} from "../../../interface/StoreI/IReducers/IAudio";


const MusicCut: FC = () => {
    const dispatch = useDispatch()
    const cuts = useSelector((state: any) => state.audio.cutBlock)
    const [xCord, setXCord] = useState(NaN)

    const startEnd = {
        start: 0,
        end: 186,
    }


    const addNewCut = () => {
        dispatch(setNewCut({...startEnd}))
        dispatch(setNewCutPosition({...startEnd}))
    }

    return (
        <Styled.SliderCut onMouseOver={(e) => setXCord(e.clientX)}>
            {cuts ? cuts.map((cut: ISetCutPos) => <CutBlock key={cut.id} posX={xCord}/>) : null}
            <Styled.Add onClick={addNewCut}>
                + add subtitle
            </Styled.Add>
        </Styled.SliderCut>
    )
}

export default MusicCut
