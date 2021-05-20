import React, {useMemo, useState} from 'react'
import ICutBlock from "../../../../interface/ICutBlock";
import './cutStyles.css'
import {useDispatch} from "react-redux";
import {changeCutPosition} from "../../../../store/actions/audio";

const CutBlock: React.FC<ICutBlock> = ({cutList}) => {
    const dispatch = useDispatch()
    const updateData = useMemo(() => ({...cutList}), [cutList]);
    const [cutCord, setCutCord] = useState(updateData);
    const [leftChangePosition, setLeftChangePosition] = useState(0);
    const [changeCord, setChangeCord] = useState(false);

    const setChangedDataToStore = () => {
        setChangeCord(false)
        // @ts-ignore
        dispatch(changeCutPosition(cutCord))
    }

    const changeCutBlock = (e: { pageX: number }, act: string) => {
        if (changeCord) {
            const {width, left} = {...updateData.styles}
            const actWidthToPx = 100 * leftChangePosition / window.innerWidth + '%'
            const testNumber = act === 'left' ?
                // @ts-ignore
                ((+width.split('%')[0] * window.innerWidth) / 100) / 2
                : 0

            if (testNumber + e.pageX >= window.innerWidth || e.pageX - testNumber <= 0) {
                setChangeCord(false)
                return
            }
            setParamsToFunctions(e.pageX, testNumber, act, actWidthToPx, width, left)

        }
    }
    const setParamsToFunctions = (
        pageX: number, testNumber: number,
        act: string, actWidthToPx: string,
        width: string | undefined,
        left: string | undefined) => {
        setLeftChangePosition(pageX - testNumber)
        setCutCord({
            ...updateData,
            styles: {
                width: (act === 'width' ? actWidthToPx : width) || '',
                left: (act === 'left' ? actWidthToPx : left) || ''
            }
        })
    }

    const duplicateFunctions = {
        onMouseDown: () => setChangeCord(true),
        onMouseUp: setChangedDataToStore
    }


    return (
        <div className='cut_block'
             onMouseMove={e => changeCutBlock(e, 'left')}
             {...duplicateFunctions}
             style={cutCord.styles}
        >
            <span> {'<'} </span>
            <span
                onMouseMove={e => changeCutBlock(e, 'width')}
                {...duplicateFunctions}
            > {'>'} </span>
        </div>

    )

}

export default CutBlock
