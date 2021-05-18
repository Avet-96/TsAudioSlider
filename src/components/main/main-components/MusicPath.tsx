import React, {FC} from 'react'
import '../main-styles/musckPath.css'
import {useSelector} from "react-redux";

const MusickPath: FC = () => {
    const audio = useSelector((state: any) => state.audio.audioChunks);
    const secToh = (sec: number) => new Date(sec * 1000).toISOString().substr(11, 8)
    const audioList = () => audio
        ? audio.map((list: any) =>
            <div className='path_block' key={list.id}>
                <span className='cosed'><i className="fas fa-trash"/></span>
                <input type='text' className='input' value={list.textParams.text} onChange={() => {
                }}/>
                <div className='start_end'>
                    <span>start <span className='time_block'>{secToh(list.start)}</span></span>
                    <span>|</span>
                    <span>end  <span className='time_block'>{secToh(list.end)}</span></span>
                </div>
            </div>)
        : null


    return (<>
            {audioList()}
        </>
    )
}

export default MusickPath
