import {
    ISetModifiedCud,
    ISetModifiedParams,
    ISetNewCutData,
    ISetNewMusicCut
} from "../../interface/StoreI/IActions/IAudioActions";

const SET_NEW_MUSIC_CUT = 'SET_NEW_CUT'
const SET_CUT_MODIFIED_PARAMETERS = 'SET_CUT_MODIFIED_PARAMETERS'

const setNewCut = (newCut: ISetNewCutData): ISetNewMusicCut => ({type: SET_NEW_MUSIC_CUT, payload: newCut})
const setCutModifiedParameters = (modifiedParams: ISetModifiedCud): ISetModifiedParams => ({
    type: SET_CUT_MODIFIED_PARAMETERS,
    payload: modifiedParams
})

export {
    SET_NEW_MUSIC_CUT,
    SET_CUT_MODIFIED_PARAMETERS
}
export {
    setNewCut,
    setCutModifiedParameters
}
