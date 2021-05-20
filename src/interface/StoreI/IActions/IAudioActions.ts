import {ISetCutPos, ISetNewCut} from "../IReducers/IAudio";
import {CHANGE_CUT_POSITION, CHANGE_CUT_WIDTH, SET_NEW_CUT, SET_NEW_CUT_POSITIONS} from "../../../store/actions/audio";

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
