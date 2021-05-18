import React, {useMemo, useState} from 'react'
import './cutStyles.css'
import {useSelector} from "react-redux";

interface ICutBlock {
    params?: {
        id: number,
        start: number,
        end: number,
        styles: {
            width: string,
            left: string
        }
    }[]
    posX: number
}

const CutBlock: React.FC<ICutBlock> = ({posX}) => {

    const params = useSelector((state: any) => state.audio.cutBlock)
    const getParams = useMemo(() => params, [params])
    const [paramsBlock, setParamsBlock] = useState([...getParams])
    const [changeCord, setChangeCord] = useState(false)
    const mouseOverCord = (e: any) => {
        const changeData = [...paramsBlock]
        const blockCord = {...paramsBlock[0].styles}
        let wid = +blockCord.width.split('p')[0] / 2
        wid += (e.clientX - posX)
        if (changeCord) {
            changeData[0].styles.left = wid + 'px'
            setParamsBlock(changeData)
        }
    }

    return (
        <>
            {paramsBlock.length ? paramsBlock.map(
                (list: any) => <div className='cut_block'
                                    key={list.id}
                                    onMouseDown={() => setChangeCord(true)}
                                    onMouseUp={() => setChangeCord(false)}
                                    onMouseMove={e => mouseOverCord(e)}
                                    style={list.styles}
                >
                    <span> {'<'} </span>
                    <span> {'>'} </span>
                </div>
            ) : null}
        </>

    )
}

export default CutBlock
