export default interface IAudioInitialState {
    audioUrl: string,
    imageUrl: string,
    canvasHeight: number,
    canvasWidth: number,
    duration: number,
    audioChunks: Array<{
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
    }>,
    audioCuts: Array<{
        id: number,
        start: number,
        end: number,
        styles: {
            width: string,
            left: string
        }
    }>,
    staticLeft: number
}



