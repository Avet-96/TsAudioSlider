import React, {FC} from 'react'
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {AppStyled} from "./assets/appStyled";

const App: FC = () => {

    return (
        <AppStyled>
            <Header/>
            <Main/>
            <Footer/>
        </AppStyled>
    )
}

export default App
