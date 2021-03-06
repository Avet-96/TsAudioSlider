type IAddNewMusicCut = {
    id: number,
    start: number,
    end: number,
    styles: {
        left: string,
        width: string
    }
}
const foldParams = (w: string, l: string) => {
    const _left = parseInt(w) + parseInt(l)
    const _width = 100 - parseInt(w) -3
    return [_width, _left]
}
const addNewMusicCut = (
    id: number,
    newCutParams: { start: number, end: number },
    length: number, cutList: Array<IAddNewMusicCut>): IAddNewMusicCut => {
    const audioCut = {
        id,
        ...newCutParams,
        styles: {
            width: '',
            left: ''
        }
    }
    const foolWidth = (window.innerWidth - 40) * 100 / window.innerWidth
    if (length === 0) {
        audioCut.styles = {
            width: `${foolWidth}%`,
            left: '0%'
        }
    } else {
        const {styles: {left, width}} = cutList[cutList.length - 1]
        const [_width, _left] = foldParams(width, left)
        audioCut.styles = {
            width: `${_width}%`,
            left: `${_left}%`
        }
    }
    return audioCut
}

export default addNewMusicCut
