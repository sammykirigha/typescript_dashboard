import {
    Badge,
    Divider,
    List,
    ListItemText,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./List.css";
import {useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { links, otherLinks } from "../header-routes";
import { ListItemContent } from "../listitem/ListItem";
import { SelectItems } from "../../reusableCompts/SelectItems";
import { DrawerHeader } from "../../reusableCompts//DrawerHeader";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

interface Props {
    handleDrawerClick: () => void;
}

interface Link {
    text: string;
    icon: JSX.Element;
    badge: number;
    link: string;
    children: {
        text: string;
        link: string;
    }[];
}

const iconStyles = {
    height: '25px',
    width: '25px',
}

const renderOtherLinks = (otherLinks: any) => (
    <>
        {otherLinks.map(({ text, icon, link }: any) => {
            return <ListItemContent to={link} icon={icon} text={text} />;
        })}
    </>
);

export const ListContainer: React.FC<Props> = ({
    handleDrawerClick,
}): JSX.Element => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleChange = () => {
        setIsActive(!isActive);
    };

    const renderRouteLinks = (
        links: any,
        navigate: (link: string) => void
    ): JSX.Element => (
        <>
            {links.map(({ text, icon, badge, link, children }: Link) => {
                if (children?.length > 0) {
                    return (
                        <div>
                            <div className="listitem-box">
                                <div
                                    onClick={() => navigate(link)}
                                    className="listitem-container"
                                    style={{ width: "100%" }}
                                >
                                    <div className="myDiv">
                                        <div>{icon}</div>
                                        <div style={{ paddingLeft: "15px" }}>
                                            {text}
                                        </div>
                                    </div>

                                    <div onClick={handleChange}>
                                        {isActive ? (
                                            <RiArrowUpSLine style={iconStyles} />
                                        ) : (
                                            <RiArrowDownSLine style={iconStyles} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            {isActive && (
                                <div style={{ background: "#E9F8FE", paddingBottom: '10px' }}>
                                    <div className="accord-list-box">
                                        {children.map((child) => (
                                            <ListItemText
                                                style={{
                                                    cursor: "pointer",
                                                    paddingTop: "5px",
                                                }}
                                                onClick={() =>
                                                    navigate(child.link)
                                                }
                                                primary={child.text}
                                            ></ListItemText>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                } else {
                    return (
                        <ListItemContent to={link} icon={icon} text={text === 'Catalogue'? 'Catttt' : text}>
                            <Badge sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 21, minWidth: 21,} }} badgeContent={badge} color="success" />
                        </ListItemContent>
                    );
                }
            })}
        </>
    );

    return (
        <Box>
            <DrawerHeader handleClick={handleDrawerClick} />
            <Divider />
            <List>{renderRouteLinks(links, navigate)}</List>
            <Divider />
            <List>{renderOtherLinks(otherLinks)}</List>
            <Typography component="div" style={{ margin: "50px 0px" }}>
                <span style={{ marginLeft: "20px" }}>Select your shop</span>
                <SelectItems />
            </Typography>
        </Box>
    );
};
