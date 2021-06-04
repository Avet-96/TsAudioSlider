export default interface IAddNewMusicCut {
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
export type IAddMusicParams = {
    id: number, newChunkParams: { start: number, end: number }
}
