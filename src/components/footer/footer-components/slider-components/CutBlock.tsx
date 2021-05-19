import React, {useMemo, useState} from 'react'
import './cutStyles.css'
import {useDispatch, useSelector} from "react-redux";
import ICutBlock from "../../../../interface/ICutBlock";
import {changeCutPosition} from "../../../../store/actions/audio";


const CutBlock: React.FC<ICutBlock> = ({posX}) => {
    const cutBlock = useSelector((state: any) => state.audio.cutBlock)
    const updateData = useMemo(() => cutBlock, [cutBlock])
    const [cutCord, setCutCord] = useState(updateData)

    const [changeCord, setChangeCord] = useState(false)
    const dispatch = useDispatch()

    const mouseOverCord = (e: { clientX: number }, id: number) => {
        const blockCord = {...updateData[0].styles}
        let left = +blockCord.width.split('%')[0] / 2
        left += (e.clientX - posX)
        if (changeCord) {
            setCutCord(updateData.map((items: any) => {
                if (items.id === id) {
                    items.styles = {
                        width: items.styles.width,
                        left: `${left}px`
                    }
                }
                return items
            }))
        }
    }

    const setDataToStore = () => {
        setChangeCord(false)
        dispatch(changeCutPosition(cutCord))
    }

    return (
        <>
            {cutCord.length ? cutCord.map(
                (list: any) =>
                    <div className='cut_block'
                         key={list.id}
                         onMouseDown={() => setChangeCord(true)}
                         onMouseUp={setDataToStore}
                         onMouseOut={() => setChangeCord(false)}
                         onMouseMove={e => mouseOverCord(e, list.id)}
                         style={list.styles}
                    >
                        <span> {'<'} </span>
                        <span > {'>'} </span>
                    </div>
            ) : null}
        </>
    )
}

export default CutBlock
