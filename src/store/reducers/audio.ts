import {AudioActionTYpe, ISetCut, ISetCutPositions, SET_NEW_CUT, SET_NEW_CUT_POSITIONS} from "../actions/audio";
import IAudio from "../../interface/StoreI/IReducers/IAudio";
import score from "../../hooks/score";


export const initialState: IAudio = {
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    imageUrl: "inch vor nkar",
    canvasHeight: 1080,
    canvasWidth: 1920,
    duration: 186,
    audioChunks: [],
    cutBlock: []
};


export default function reducers(state = initialState, action: ISetCut | AudioActionTYpe | ISetCutPositions) {
    switch (action.type) {
        case SET_NEW_CUT: {
            // change IAudio types
            const addData = {
                id: Math.floor(Math.random() * 10000),
                ...action.payload,
                textParams: {
                    text: "Lorem Ipsum",
                    fontName: "Montserrat",
                    color: "red",
                    size: "16px",
                    coordinates: [120, 190],
                    opacity: 1,
                    styles: ["bold", "italic", "underlined"],
                },
            }
            return {
                ...state, audioChunks: [
                    // @ts-ignore
                    ...state.audioChunks,
                    addData]
            }
        }
        case SET_NEW_CUT_POSITIONS: {
            const [cordData, num] = score(state.cutBlock, action.payload)
            if (num >= 101) {
                console.log(num)
                return state
            }
            return {
                ...state,
                cutBlock: [
                    // @ts-ignore
                    ...state.cutBlock,
                    cordData]
            }
        }
        default : {
            return state
        }

    }
}
