import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`
const LogoBlock = styled.div`
  width: 50%;
  padding-left: 25px;
`
const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
`
const ImagesBlock = styled.div`
  width: 25%;
`
const ButtonsGroup = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`
const Btn = styled.button`
  background-image: ${({fi}) =>
          fi ? 'linear-gradient(to bottom,#9c95ff,#938bf9,#8981f4,#8077ee,#766de8);'
                  : 'linear-gradient(tp bottom,-179deg, #5690FF 0%, #387DFF 97%)'
  };
  box-shadow: 0 3px 16px 0 rgb(56 125 255 / 50%);
  flex-shrink: 0;
  cursor: pointer;
  margin: 0 0 0 15px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  border-radius: 30px;
  padding: 0 25px;
  display: inline-block;
  text-align: center;
  transition: all 0.1s linear;
  letter-spacing: 1px;
  border: none;
  font-weight: 400;
  background-color: #0684ED;
  color: #ffffff;
`
const UserBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0684ED;
  font-size: 18px;
  width: 40%;
`
const Down = styled.span`
  font-size: 10px;
`

export {
    Container,
    HeaderBlock,
    ImagesBlock,
    LogoBlock,
    ButtonsGroup,
    Buttons,
    Btn,
    UserBlock,
    Down
}
