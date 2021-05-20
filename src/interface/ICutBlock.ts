export default interface ICutBlock {
    cutList?: {
        id: number,
        start: number,
        end: number,
        styles: {
            width: string,
            left: string
        }
    } | {}
}
