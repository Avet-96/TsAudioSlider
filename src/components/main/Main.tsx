import React, {FC} from "react";

import TextChangesBlock from "./TextChangesBlock";
import MainVideo from "./MainVideo";
import Subtiters from "./Subtiters";

import * as Styled from './main-styles/main'

const Main: FC = () => {

    return <Styled.MainS>
        <TextChangesBlock/>
        <MainVideo/>
        <Subtiters/>
    </Styled.MainS>
}

export default Main
