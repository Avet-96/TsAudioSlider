import {ISetNewCut, ISetCutPos, IChangePosition,} from "../../interface/StoreI/IReducers/IAudio";


export const SET_NEW_CUT = 'SET_NEW_CUT'
export const SET_NEW_CUT_POSITIONS = 'SET_NEW_CUT_POSITIONS'
export const CHANGE_CUT_POSITION = 'CHANGE_CUT_POSITION'
export const CHANGE_CUT_WIDTH = 'CHANGE_CUT_WIDTH'

export interface ISetCut {
    type: typeof SET_NEW_CUT,
    payload: ISetNewCut
}

export interface ISetCutPositions {
    type: typeof SET_NEW_CUT_POSITIONS,
    payload: ISetCutPos
}

export interface ICutPosition {
    type: typeof CHANGE_CUT_POSITION,
    payload: ISetCutPos
}

export interface ICutWidth {
    type: typeof CHANGE_CUT_WIDTH,
    payload: ISetCutPos
}


export const setNewCut = (data: ISetNewCut): ISetCut => {
    return {
        type: SET_NEW_CUT,
        payload: data
    }
}
export const setNewCutPosition = (data: ISetCutPos): ISetCutPositions => {
    return {
        type: SET_NEW_CUT_POSITIONS,
        payload: data
    }
}
export const changeCutPosition = (changeData: ISetCutPos): ICutPosition => {
    return {
        type: CHANGE_CUT_POSITION,
        payload: changeData
    }
}
export const changeCutWidth = (changeData: ISetCutPos): ICutWidth => {
    return {
        type: CHANGE_CUT_WIDTH,
        payload: changeData
    }
}


