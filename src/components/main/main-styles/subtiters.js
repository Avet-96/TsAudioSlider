import styled from "styled-components";

const SubtitMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F7FAFF;
  color: #131313c2;
  width: 30%;
  padding: 25px;
`
const STitle = styled.h2`
  font-size: 22px;
  text-align: center;
`
const Btn = styled.button`
  width: 140px;
  height: 35px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #1d1d1d7a;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
`

export {
    SubtitMain,
    STitle,
    Btn
}
