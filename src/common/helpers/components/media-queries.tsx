import React from "react";
import Media from "react-responsive";

export const widthThreshold = 960;

export const DesktopView: React.SFC = ({ children }) => (
    <Media minWidth={widthThreshold + 1}>
         {children}
     </Media>
);

export const MobileView: React.SFC = ({ children }) => (
    <Media maxWidth={widthThreshold}>
        {children}
    </Media>
);
