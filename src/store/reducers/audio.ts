import {AudioActionTYpe} from "../actions/audio";
import IAudio from "../../interface/StoreI/IReducers/IAudio";

export const initialState:IAudio = {
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        imageUrl: "inch vor nkar",
        canvasHeight: 1080,
        canvasWidth: 1920,
        duration: 186,
        audioChunks: [
            {
                id: 1,
                start: 0,
                end: 186,
                textParams: {
                    text: "Lorem Ipsum",
                    fontName: "Montserrat",
                    color: "red",
                    size: "16px",
                    coordinates: [120, 190],
                    opacity: 1,
                    styles: ["bold", "italic", "underlined"],
                },
            },
        ]
};

export default function reducers(state = initialState, action: AudioActionTYpe) {
    switch (action.type) {
        default : {
            return state
        }

    }
}
