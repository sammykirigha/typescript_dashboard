import React from "react";
import "./ListItem.css";
import { useNavigate } from "react-router-dom";

interface Props {
    icon: JSX.Element;
    text: string;
    to: string;
    children?: JSX.Element;
}

export const ListItemContent: React.FC<Props> = ({
    icon,
    text,
    children,
    to,
}): React.ReactElement => {
    const navigate = useNavigate();
    return (
        <div className="listitem-box">
            <div
                onClick={() => {
                    navigate(to);
                }}
                className="listitem-container"
            >
                <div className="myDiv">
                    <div>{icon}</div>
                    <div style={{ paddingLeft: "15px" }}>{text}</div>
                    <div className="badge">
                        {children}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
