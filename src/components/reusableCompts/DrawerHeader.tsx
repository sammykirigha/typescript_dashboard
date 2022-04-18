import { IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import image5 from "../../images/logo.png";

const DrawerStyles = {
    display: "flex",
    alignItems: "center",
	justifyContent: "space-between",
	height: '85px',
	padding: '10px'
};

interface Props {
    handleClick?: React.MouseEventHandler;
}

export const DrawerHeader: React.FC<Props> = ({ handleClick }): JSX.Element => {
    return (
        <Box style={DrawerStyles}>
            <Box>
                <img style={{ height: "17px" }} src={image5} alt="logo" />
            </Box>
            <IconButton onClick={handleClick}>
                <MenuIcon />
            </IconButton>
        </Box>
    );
};
