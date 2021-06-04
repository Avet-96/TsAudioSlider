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

export type ChangeParamType = 'changeLeft' | 'changeWidthRight' | 'changeWidthLeft'

