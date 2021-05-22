type IAddNewMusicCut = {
    id: number,
    start: number,
    end: number,
    textParams: {
        text: string,
        fontName: string,
        color: string,
        size: string,
        coordinates: Array<number>,
        opacity: number,
        styles: Array<string>
    }
}

const addNewMusicChunk = (id: number, newChunkParams: { start: number, end: number }): IAddNewMusicCut => {
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
