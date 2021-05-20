import {
    SET_NEW_CUT,
    SET_NEW_CUT_POSITIONS,
    CHANGE_CUT_POSITION,
} from "../actions/audio";
import IAudio from "../../interface/StoreI/IReducers/IAudio";
import score from "../../hooks/score";
import {ICutPosition, ISetCut, ISetCutPositions} from "../../interface/StoreI/IActions/IAudioActions";
import produce from "immer";
import {LogoBlock} from "../../components/header/header-styles/header";


export const initialState: IAudio = {
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    imageUrl: "inch vor nkar",
    canvasHeight: 1080,
    canvasWidth: 1920,
    duration: 186,
    audioChunks: [],
    cutBlock: []
};

const reducers = produce((draft, action: ISetCut | ISetCutPositions | ICutPosition) => {
    switch (action.type) {
        case SET_NEW_CUT : {
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
            draft.audioChunks?.push(addData)
        }
            break
        case SET_NEW_CUT_POSITIONS: {
            const [cordData, num] = score(draft.cutBlock, action.payload)
            if (num >= 101) {
                break
            }
            draft.cutBlock = [...draft.cutBlock || [], cordData]
        }
            break

        case CHANGE_CUT_POSITION :
            // @ts-ignore
            draft.cutBlock = draft.cutBlock?.map(
                cut => action.payload.id === cut.id ?
                    action.payload : cut
            )

            break
    }
}, initialState)
export default reducers

