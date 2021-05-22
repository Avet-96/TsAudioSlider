import React from "react";
import {FooterBlock} from "./footer-styled/footer";
import Instruments from "./footer-components/Instruments";
import PlayerSlider from "./footer-components/PlayerSlider";
import MusicCut from "./footer-components/MusicCuts";

const Footer = () => {
    return (
        <FooterBlock>
            <Instruments/>
            <PlayerSlider/>
            <MusicCut/>
        </FooterBlock>
    )
}

export default Footer
