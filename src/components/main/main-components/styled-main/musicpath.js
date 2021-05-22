import styled from "styled-components";

const PathBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  border-radius: 6px;
  padding: 25px 1.5%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
`
const Cosed = styled.span`
  display: flex;
  justify-content: flex-end;
  color: darkgrey;
  font-size: 20px;
`
const Input = styled.input`
  border: 1px solid #E8EFFA;
  border-radius: 8px;
  margin: 15px 0;
  padding: 8px 12px;
  font-size: 14px;
  color: black;
`
const StartEnd = styled.div`
  color: #1d1d1d7a;
  display: flex;
  justify-content: space-around;
  align-items: center;`

const TimeBlock = styled.span`
  color: rgba(5, 5, 5, 0.48);
  border: 1px solid darkgray;
  margin-left: 6px;
`
export {
    PathBlock,
    Cosed,
    Input,
    StartEnd,
    TimeBlock
}


