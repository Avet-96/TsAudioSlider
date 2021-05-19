import React, {useMemo, useState} from "react";

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

export const useFlowChangeCut = (origData: IorData[] | [], changesData: IChangeData) => {
    const updData = useMemo(() => origData, [origData])

    return [...updData.map((items: IorData) => {
        if (items.id === changesData.id) {
            console.log()
            items.styles = {
                width: items.styles.width,
                left: `${changesData.left}px`
            }
        }
        return items
    })]
}

