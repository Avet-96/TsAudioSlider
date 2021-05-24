export default interface IAddNEwMusicFunc {
    id: number,
    start: number,
    end: number,
    styles: { width: string, left: string }
}
export type IAddNewMusicCut = {
    id: number,
    newCutParams: { start: number, end: number },
    length: number,
    cutList: Array<{
        id: number,
        start: number,
        end: number,
        styles: {
            left: string,
            width: string
        }
    }>
}
