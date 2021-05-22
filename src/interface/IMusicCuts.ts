export default interface IMusicCuts {

}

export type IMusicCutType = {
    audio: {
        audioCuts: Array<{
            id: number,
            start: number,
            end: number,
            styles: {
                left: string,
                width: string
            }
        }>,
    }
}
