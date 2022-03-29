import React from "react";
import "./CardFooter.css";

interface Props {
    linkText: string;
    footerIcon?: JSX.Element;
}

export const CardFooter: React.FC<Props> = ({
    linkText,
    footerIcon,
}): JSX.Element => {
    return (
        <div className="visitors-info">
            <span className="config-link">{linkText}</span>
            {footerIcon}
        </div>
    );
};
