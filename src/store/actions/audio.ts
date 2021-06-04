import {
    ISetModifiedCud,
    ISetModifiedParams,
    ISetNewCutData,
    ISetNewMusicCut,
    IStaticLeft,
    ISaveStaticLeft
} from "../../interface/StoreI/IActions/IAudioActions";

const SET_NEW_MUSIC_CUT = 'SET_NEW_CUT'
const SET_CUT_MODIFIED_PARAMETERS = 'SET_CUT_MODIFIED_PARAMETERS'
const SAVE_STATIC_LEFT_PARAM = 'SAVE_STATIC_LEFT_PARAMS'


const setNewCut = (newCut: ISetNewCutData): ISetNewMusicCut => ({type: SET_NEW_MUSIC_CUT, payload: newCut})
const setCutModifiedParameters = (modifiedParams: ISetModifiedCud): ISetModifiedParams => ({
    type: SET_CUT_MODIFIED_PARAMETERS,
    payload: modifiedParams
})
const saveStaticLeftParams = (mouseXPosition: IStaticLeft): ISaveStaticLeft => ({
    type: SAVE_STATIC_LEFT_PARAM,
    payload: mouseXPosition
})

export {
    SET_NEW_MUSIC_CUT,
    SET_CUT_MODIFIED_PARAMETERS,
    SAVE_STATIC_LEFT_PARAM
}
export {
    setNewCut,
    setCutModifiedParameters,
    saveStaticLeftParams
}
