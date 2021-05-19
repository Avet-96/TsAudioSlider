import styled from 'styled-components'


const InsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2% 4%;
`
const ZoomButtons = styled.div`
  display: flex;
  align-items: center;
`
const ZoomBtn = styled.span(({left}) => {
    let style = {
        textAlign: 'center',
        color: '#7683A7',
        border: '1px solid #7683A7 ',
        padding: '6px'
    }
    let leftSpan = {
        borderBottomLeftRadius: '8px',
        borderTopLeftRadius: '8px'
    }

    let rightSpan = {
        borderBottomRightRadius: '8px',
        borderTopRightRadius: '8px'
    }

    style = !left ? {...style, ...rightSpan} : {...style, ...leftSpan}
    return style
})
const PlayerButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
`
const PrevNext = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 35%;
  cursor: pointer;
`

const Btn = styled.span`
  font-size: 16px;
  color: darkgrey;
`

const Play = styled.span`
  width: 20%;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
`
const TimerBlock = styled.span`
  font-size: 18px;
  text-align: center;
`

export {
    InsBlock,
    ZoomButtons,
    ZoomBtn,
    PlayerButtonsGroup,
    PrevNext,
    Play,
    Btn,
    TimerBlock
}
