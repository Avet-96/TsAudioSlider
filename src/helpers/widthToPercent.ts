const widthToPercent = (params: { width: number, left: string }) => {
    const {width, left} = params
    const fullWidth = window.innerWidth
    const _left = parseInt(left) * fullWidth / 100
    const _width = ((width - _left) * 100 / fullWidth)

    const leftRightConfBlocks = _width < 60
        ? _width : _width < 30
            ? _width + 10
            : _width + 2

    return {width: `${leftRightConfBlocks}%`}
}
export default widthToPercent
