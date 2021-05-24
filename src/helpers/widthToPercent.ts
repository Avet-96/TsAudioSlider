type IWidthToPercentType = {
    width: string,
    left: string,
    mouseXPosition: number
    staticLeft: number
}
const widthToPercent = ({width, left, staticLeft, mouseXPosition}: IWidthToPercentType) => {
    const fullWidth = window.innerWidth
    const _width = (parseInt(width) + parseInt(left)) * fullWidth / 100
    const changeWidth = (_width + staticLeft - mouseXPosition)
    const finalResult = (changeWidth * 100 / fullWidth)

    return {width: `${finalResult}%`}
}
export default widthToPercent
