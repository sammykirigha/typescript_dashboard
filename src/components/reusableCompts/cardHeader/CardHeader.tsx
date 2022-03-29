import React from "react";
import "./CardHeader.css";

interface Props {
    icon: JSX.Element;
    headerText: string;
    children: React.ReactElement;
}

export const CardHeader: React.FC<Props> = ({
    icon,
    headerText,
    children,
}): JSX.Element => {
    return (
        <div className="card-content1">
            <div className="card-header">
                {icon}
                <span data-testid="values" className="card-content-span1">
                    {headerText}
                </span>
            </div>
            <div className="card-header">{children}</div>
        </div>
    );
};
