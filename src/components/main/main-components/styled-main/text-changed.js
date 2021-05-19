import styled from "styled-components";

const TextsBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border: 1px solid #E8EFFA;
  background: white;;
`
const InputBlo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`
const InputIconBlock = styled.span`
  border: 1px solid #E8EFFA;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-right: none;
  font-size: 15px;
  padding: 10px;
  display: inline-block;
  background: white;
  color: #9AA6C8;
`
const InputBlock = styled.input`
  font-size: 15px;
  padding: 10px;
  background: white;
  border: 1px solid #E8EFFA;
  border-left: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  ::placeholder {
    color: #9AA6C8;
    text-align: center;
  }
`
const Text = styled.h3`
  font-size: 18px;
  font-weight: 800;
  width: 30%;
  text-align: center;
`
const TextStyleBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1%;
`
const TextSelect = styled.select`
  border: none;
  font-size: 18px;
  width: 60%;
  padding: 1%;
`
const SelectOptions = styled.option`

`
export {
    TextsBlock,
    InputBlock,
    InputIconBlock,
    InputBlo,
    TextStyleBlock,
    TextSelect,
    SelectOptions,
    Text
}
