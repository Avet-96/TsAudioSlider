import  {useMemo} from "react";

type IorData = {
    id: number,
    start: number,
    end: number,
    styles: {
        width: string,
        left: string
    }
}
type IChangeData = { id: number, left: number }

export const useFlowChangeCut = (originalData: IorData[] | [], changedData: IChangeData) => {
    const updatedData = useMemo(() => originalData, [originalData])

    return updatedData.map((item: IorData) => {
        if (item.id === changedData.id) {
            return {
                ...item,
                styles: {
                    width: item.styles.width,
                    left: `${changedData.left}px`
                }
            }
        }
        return item
    })
}

