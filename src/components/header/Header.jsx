import * as Styled from './header-styles/header'
import logo from '../../assets/images/svg/rlogo.svg'

const Header = () => {
    return (
    <Styled.Container>
        <Styled.HeaderBlock>
            <Styled.LogoBlock>
                {/* TODO: maybe you dont need this ImagesBlock */}
                <Styled.ImagesBlock>
                    <img src={logo} alt="Render Fores logo" width='100%' height='100%'/>
                </Styled.ImagesBlock>
            </Styled.LogoBlock>
            <Styled.ButtonsGroup>
                <Styled.Buttons>
                    <Styled.Btn fi>PREVIEW</Styled.Btn>
                    <Styled.Btn>DOWNLOAD</Styled.Btn>
                </Styled.Buttons>
                <Styled.UserBlock>
                    <span style={{marginRight: 10}}><i className="fas fa-user"/></span>
                    <span>Jon Smith <Styled.Down><i className="fas fa-chevron-down"/></Styled.Down></span>
                </Styled.UserBlock>
            </Styled.ButtonsGroup>
        </Styled.HeaderBlock>
    </Styled.Container>
    )
}

export default Header
