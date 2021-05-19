export default interface ICutBlock {
    params?: {
        id: number,
        start: number,
        end: number,
        styles: {
            width: string,
            left: string
        }
    }[]
    posX: number,
}
