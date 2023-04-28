import React from "react";
import { useLottie } from "lottie-react";
import PortfolioLogoJson from "./json/PortfolioLogo.json";


export const PorfolioLogo = () => {
    const options = {
        animationData: PortfolioLogoJson,
        loop: true
    };

    const { View } = useLottie(options);

    return <div style={{width:200, height:200}}>{View}</div>;
}