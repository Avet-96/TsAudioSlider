const leftToPercent = (params: { left: string, mousePosition: number, staticLeft: number }) => {
    const {staticLeft, mousePosition, left} = params
    const fullWidth = window.innerWidth
    const _left = parseInt(left) * fullWidth / 100
    const leftChange = (_left + mousePosition - staticLeft) * 100 / fullWidth
    return {left: `${leftChange}%`}
}
export default leftToPercent
