import {ISetCutPos, ISetNewCut,} from "../../interface/StoreI/IReducers/IAudio";
import {ISetCut,ISetCutPositions, ICutPosition, ICutWidth} from "../../interface/StoreI/IActions/IAudioActions";

const SET_NEW_CUT = 'SET_NEW_CUT'
const SET_NEW_CUT_POSITIONS = 'SET_NEW_CUT_POSITIONS'
const CHANGE_CUT_POSITION = 'CHANGE_CUT_POSITION'
const CHANGE_CUT_WIDTH = 'CHANGE_CUT_WIDTH'


const setNewCut = (data: ISetNewCut): ISetCut => {
    return {
        type: SET_NEW_CUT,
        payload: data
    }
}
const setNewCutPosition = (data: ISetCutPos): ISetCutPositions => {
    return {
        type: SET_NEW_CUT_POSITIONS,
        payload: data
    }
}
const changeCutPosition = (changeData: ISetCutPos): ICutPosition => {
    return {
        type: CHANGE_CUT_POSITION,
        payload: changeData
    }
}
const changeCutWidth = (changeData: ISetCutPos): ICutWidth => {
    return {
        type: CHANGE_CUT_WIDTH,
        payload: changeData
    }
}


export {
    SET_NEW_CUT,
    SET_NEW_CUT_POSITIONS,
    CHANGE_CUT_POSITION,
    CHANGE_CUT_WIDTH,
    setNewCut,
    setNewCutPosition,
    changeCutPosition,
    changeCutWidth
}
