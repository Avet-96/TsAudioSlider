const widthLeftToPx = (params: { width: number }) => {
    const {width} = params
    const fullWidth = window.innerWidth

    const _width = (width * 100 / fullWidth)
    let leftRightConfBlocks = 30 * 100 / fullWidth

    if (_width < 60) {
        leftRightConfBlocks = leftRightConfBlocks / 2
    }
    if (_width < 30) {
        leftRightConfBlocks = leftRightConfBlocks / 10
    }
    return {width: `${_width + leftRightConfBlocks}%`}
}
export default widthLeftToPx
