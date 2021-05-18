import React, {FC} from "react";

import TextChangesBlock from "./main-components/TextChangesBlock";
import MainVideo from "./main-components/MainVideo";
import Subtiters from "./main-components/Subtiters";

import * as Styled from './main-styles/main'

const Main: FC = () => {

    return (<Styled.MainS>
        <TextChangesBlock/>
        <MainVideo/>
        <Subtiters/>
    </Styled.MainS>)
}

export default Main
