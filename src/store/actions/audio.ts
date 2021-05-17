import IAudio from "../../interface/StoreI/IReducers/IAudio";

export const GET_AUDIO_PATH = 'GET_AUDIO_PATH';



export interface GetAudioActionType {
    type: typeof GET_AUDIO_PATH,
    payload: IAudio
}

export type AudioActionTYpe = GetAudioActionType


export const getAudiosAction = (audio: IAudio): AudioActionTYpe => {
    return {
        type: GET_AUDIO_PATH,
        payload: audio
    };
};
