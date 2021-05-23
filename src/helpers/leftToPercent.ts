const leftToPercent = (params: { left: string, mousePosition: number }) => {
    const {left} = params
   // const fullWidth = window.innerWidth
    const _left = parseInt(left)

    return {left: `${_left}%`}
}
export default leftToPercent
