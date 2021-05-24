import ILeftToPerFunc, {ILeftToPercent} from "../interface/Helpers/ILeftToProcent";

const leftToPercent = ({left, mousePosition, staticLeft}: ILeftToPercent): ILeftToPerFunc => {
    const fullWidth = window.innerWidth
    const _left = parseInt(left) * fullWidth / 100
    const leftChange = (_left + mousePosition - staticLeft) * 100 / fullWidth
    return {left: `${leftChange}%`}
}
export default leftToPercent
