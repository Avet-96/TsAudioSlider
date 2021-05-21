import React, {useCallback, useEffect, useMemo, useState} from 'react'
import ICutBlock from "../../../../interface/ICutBlock";
import {useDispatch} from "react-redux";
import {changeCutPosition} from "../../../../store/actions/audio";
import './cutStyles.css'


const CutBlock: React.FC<ICutBlock> = ({cutList}) => {
    const dispatch = useDispatch()
    const updateData = useMemo(() => ({...cutList}), [cutList]);
    const [cutCord, setCutCord] = useState(updateData);
    const [leftChangePosition, setLeftChangePosition] = useState(0);
    const [position, setPosition] = useState(0);
    const [changeCord, setChangeCord] = useState(false);
    const [chuseAct, setChuseAct] = useState('')


    const setParamsToFunctions = useCallback(
        (act: string, horizontallyScroll: string, widthGrowOut: number,
         width: string | undefined, left: string | undefined)  => {
            // @ts-ignore
            const changeWidth = (+width?.split('%')[0] + widthGrowOut) + "%"
            setCutCord({
                ...updateData,
                styles: {
                    width: (act === 'width' ? changeWidth : width) || '',
                    left: (act === 'left' ? horizontallyScroll : left) || ''
                }
            })
        },
        [updateData]);

    useEffect(() => {
        const setFromEvent = (e: { clientX: number }) => setPosition(e.clientX);
        window.addEventListener("mousemove", setFromEvent);
        if (changeCord) {
            const {width, left} = {...updateData.styles}
            // @ts-ignore
            const blockWidth = window.innerWidth * +width.split('%')[0] / 100
            const horizontallyScroll = 100 * leftChangePosition / window.innerWidth + '%'
            const widthGrowOut = ((position - leftChangePosition - blockWidth) * 100) / window.innerWidth
            if (chuseAct === 'left') {
                setLeftChangePosition(position - blockWidth / 2)
            }
            if (blockWidth / 2 + position >= window.innerWidth || position - blockWidth / 2 <= 0) {
                setLeftChangePosition(0)
                return
            }
            setParamsToFunctions(chuseAct, horizontallyScroll, widthGrowOut, width, left)
        }
        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, [changeCord, position, chuseAct, leftChangePosition, updateData.styles, setParamsToFunctions]);


    const setChangedDataToStore = () => {
        dispatch(changeCutPosition(cutCord))
        setChangeCord(false)
    }
    const chooseAct = (e: any, act: string) => {
        setChuseAct(act)
        setChangeCord(true)
    }


    return (
        <div className='cut_block' style={cutCord.styles}>
            <span className='left_right'> {'<'} </span>
            <span className='cut_block_t'
                  onMouseDown={e => chooseAct(e, 'left')}
                  onMouseUp={setChangedDataToStore}/>
            <span className='left_right'
                  onMouseDown={e => chooseAct(e, 'width')}
                  onMouseUp={setChangedDataToStore}
            > {'>'} </span>
        </div>

    )

}

export default CutBlock
