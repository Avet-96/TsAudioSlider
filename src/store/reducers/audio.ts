import {SAVE_STATIC_LEFT_PARAM, SET_CUT_MODIFIED_PARAMETERS, SET_NEW_MUSIC_CUT,} from "../actions/audio";
import IAudioInitialState from "interface/StoreI/IReducers/IAudioInitialState";
import {AudioActionsType} from "interface/StoreI/IActions/IAudioActions";
import produce from "immer";
import {addNewMusicChunk, addNewMusicCut, idGenerator} from "../../helpers";


export const initialState: IAudioInitialState = {
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    imageUrl: "inch vor nkar",
    canvasHeight: 1080,
    canvasWidth: 1920,
    duration: 186,
    audioChunks: [],
    audioCuts: [],
    staticLeft: 0
};

const reducers = produce((draft, action: AudioActionsType) => {
    switch (action.type) {
        case SET_NEW_MUSIC_CUT : {
            const {audioChunks, audioCuts} = draft, id = idGenerator()
            const newChunk = addNewMusicChunk(id, action.payload)
            const newCut = addNewMusicCut(id, action.payload, audioCuts.length, audioCuts)
            audioChunks.push(newChunk)
            audioCuts.push(newCut)
        }
            break
        case SET_CUT_MODIFIED_PARAMETERS: {
            const {id, styles} = action.payload
            draft.audioCuts.forEach((cut) => {
                if (cut.id === id) {
                    cut.styles = styles
                }
            })
        }
            break
        case SAVE_STATIC_LEFT_PARAM : {
            draft.staticLeft = action.payload.mouseXPosition
        }
    }
}, initialState)
export default reducers

