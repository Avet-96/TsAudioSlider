// @ts-ignore
let widList: {}[] = []

const score = (data: any, payloadData: any) => {
    const cutArrLength = data?.length
    let styles = {}, num = 0
    if (!cutArrLength) {
        styles = {width: 100 - (100 * 50 / window.innerWidth) + '%', left: '0%'}
    } else {
        const {width, left} = data[cutArrLength - 1].styles
        styles = {
            width: 100 - +width.split('%')[0] + '%',
            left: +width.split('%')[0] + +left.split('%')[0] + '%'
        }
    }
    widList.forEach((wi: any) => {
        num += +wi.width.split('%')[0]
    })
    const addData = {
        id: Math.floor(Math.random() * 10000),
        ...payloadData, styles
    }
    return [addData, num]
}

export default score
