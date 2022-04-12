import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import "./ListItem.css";
import { useNavigate } from "react-router-dom";

const textColor = {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#103B66",
    margin: 0,
    padding: 0,
};

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
			<ListItem
                onClick={() => {
                    navigate(to);
                }}
                className="listitem"
            >
                <ListItemIcon sx={{minWidth: (theme) => theme.spacing(4)}} className="icon">{icon}</ListItemIcon>
				<ListItemText
                    secondaryTypographyProps={{ style: textColor }}
                    secondary={text}
                />
                {children}
            </ListItem>
        </div>
    );
};
