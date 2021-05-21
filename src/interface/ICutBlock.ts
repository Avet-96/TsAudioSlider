export default interface ICutBlock {
    cutList?: {
        id: number,
        start: number,
        end: number,
        styles: {
            width: string | undefined,
            left: string
        }
    } | {}
}
