export default interface IAudio {
    audioUrl: string,
    imageUrl: string,
    canvasHeight: number,
    canvasWidth: number,
    duration: number,
    audioChunks?: {
        id: number,
        start: number,
        end: number,
        textParams: {
            text: string,
            fontName: string,
            color: string,
            size: string,
            coordinates: number[],
            opacity: number,
            styles: string[]
        }
    }[]
    cutBlock?: {
        id: number,
        start: number,
        end: number,
        styles: {
            width: string,
            left: string
        }
    }[]
}

export interface ISetNewCut {
    start: number,
    end: number,
}
export interface ISetCutPos {
    id?:number,
    start: number,
    end: number,
    styles?: {
        width: string,
        left: string
    }
}

