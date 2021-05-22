import {SET_CUT_MODIFIED_PARAMETERS, SET_NEW_MUSIC_CUT} from "../../../store/actions/audio";

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

export interface ISetNewMusicCut {
    type: typeof SET_NEW_MUSIC_CUT,
    payload: ISetNewCutData
}

export interface ISetModifiedParams {
    type: typeof SET_CUT_MODIFIED_PARAMETERS,
    payload: ISetModifiedCud
}

export type AudioActionsType = ISetNewMusicCut | ISetModifiedParams

