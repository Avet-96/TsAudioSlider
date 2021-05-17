export default interface IAudio {
    audioUrl: string,
    imageUrl: string,
    canvasHeight: number,
    canvasWidth: number,
    duration: number,
    audioChunks: [
        {
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
        }
    ]
}


