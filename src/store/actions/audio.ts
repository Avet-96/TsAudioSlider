import IAudio, {ISetNewCut, ISetCutPos} from "../../interface/StoreI/IReducers/IAudio";

export const SET_NEW_CUT = 'SET_NEW_CUT'
export const SET_NEW_CUT_POSITIONS = 'SET_NEW_CUT_POSITIONS'

export interface ISetCut {
    type: typeof SET_NEW_CUT,
    payload: ISetNewCut
}

export interface ISetCutPositions {
    type: typeof SET_NEW_CUT_POSITIONS,
    payload: ISetCutPos
}

export interface GetAudioActionType {
    type: typeof SET_NEW_CUT,
    payload: IAudio
}

export type AudioActionTYpe = GetAudioActionType


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

