import {SAVE_STATIC_LEFT_PARAM, SET_CUT_MODIFIED_PARAMETERS, SET_NEW_MUSIC_CUT} from "../../../store/actions/audio";

export type ISetNewCutData = {
    start: number,
    end: number
}
export type ISetModifiedCud = {
    id: number,
    styles: {
        width: string,
        left: string
    }
}
export type IStaticLeft = {
    left: number
}

export interface ISetNewMusicCut {
    type: typeof SET_NEW_MUSIC_CUT,
    payload: ISetNewCutData
}

export interface ISetModifiedParams {
    type: typeof SET_CUT_MODIFIED_PARAMETERS,
    payload: ISetModifiedCud
}

export interface ISaveStaticLeft {
    type: typeof SAVE_STATIC_LEFT_PARAM,
    payload: IStaticLeft
}

export type AudioActionsType = ISetNewMusicCut | ISetModifiedParams | ISaveStaticLeft

