import IAddNewMusicCut, {IAddMusicParams} from "../interface/Helpers/IAddNewMusicChunk";
const addNewMusicChunk = ({id, newChunkParams}: IAddMusicParams): IAddNewMusicCut => {
    const defaultObject = {
        text: "Lorem Ipsum",
        fontName: "Montserrat",
        color: "red",
        size: "16px",
        coordinates: [120, 190],
        opacity: 1,
        styles: ["bold", "italic", "underlined"],
    }
    return {
        id,
        textParams: defaultObject,
        ...newChunkParams
    }
}
export default addNewMusicChunk
