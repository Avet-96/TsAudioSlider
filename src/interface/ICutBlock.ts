export default interface ICutBlock {
    cut: {
        id: number,
        start: number,
        end: number,
        styles: {
            left: string,
            width: string
        }
    }
}
