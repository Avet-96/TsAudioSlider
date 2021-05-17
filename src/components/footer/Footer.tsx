import React from "react";
import {FooterBlock} from "./footer-styled/footer";
import Instruments from "./Instruments";
import PlayerSlider from "./PlayerSlider";

const Footer = () => {
    return (
        <FooterBlock>
            <Instruments/>
            <PlayerSlider/>
        </FooterBlock>
    )
}

export default Footer
