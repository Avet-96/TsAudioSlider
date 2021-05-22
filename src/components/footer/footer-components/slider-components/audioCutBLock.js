import styled from "styled-components";


const AudioCutBlock = styled.div.attrs(({width, left}) => ({
    style: {
        width: width || '100px',
        left: left || '5%'
    }
}))`
  position: absolute;
  height: 60px;
  display: flex;
  color: white;

  justify-content: space-between;


`
const AudioLeftRightWidthConfig = styled.span`
  width: 20px;
  background: cornflowerblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  cursor: col-resize;
`
const AudioCutCentral = styled.span`
  width: 100%;
  background: #add8e6a8;
`

export {
    AudioCutBlock,
    AudioLeftRightWidthConfig,
    AudioCutCentral
}
