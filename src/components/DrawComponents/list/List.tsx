import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Badge,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
	Typography,
} from "@mui/material";
import React from "react";
import "./List.css";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { links, otherLinks } from "../header-routes";
import { ListItemContent } from "../listitem/ListItem";
import { SelectItems } from "../../reusableCompts/SelectItems";
import { DrawerHeader } from '../../reusableCompts//DrawerHeader';

interface Props {
	handleDrawerClick: () => void
}

const textColor = {
fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: 400,
fontSize: '14px',
lineHeight: '16px',
color: '#103B66'

}

interface Link {
	text: string;
	icon: JSX.Element;
	badge: number;
	link: string;
	children: {
		text: string;
		link: string
	}[]
}

const renderRouteLinks = (
    links:any,
    navigate: (link: string) => void
): JSX.Element => (
    <>
        {links.map(({ text, icon, badge, link, children }: Link) => {
            if (children?.length > 0) {
                return (
                    <Accordion
                        disableGutters={true}
                        sx={{ paddingTop: 0, marginTop: 0, }}
                    >
                        <AccordionSummary
                            sx={{ paddingTop: 0, marginTop: 0 }}
                            style={{ marginLeft: "-17px" }}
                        >
                            <ListItem onClick={() => navigate(link)} style={{width: '100%'}}>
                                <ListItemIcon style={{ color: "#103B66", marginLeft: '0px' }}>
                                    <WifiTetheringIcon />
                                </ListItemIcon>
                                <ListItemText sx={{fontSize: 14}} secondaryTypographyProps={{style: textColor}} secondary={text} />
                                <ArrowDropDownIcon />
                            </ListItem>
                        </AccordionSummary>
                        <AccordionDetails sx={{ background: "#E9F8FE" }}>
                            <div className="accord-list-box">
                                {children.map((child) => (
                                    <ListItemText
                                        style={{cursor: 'pointer'}}
                                        onClick={() => navigate(child.link)}
                                        secondary={child.text}
                                    ></ListItemText>
                                ))}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                );
            } else {
                return (
                    <ListItemContent to={link}  icon={icon} text={text}>
                        <Badge badgeContent={badge} color="success"  />
                    </ListItemContent>
                );
            }
        })}
    </>
);

const renderOtherLinks = (otherLinks: any) => (
	<>
		{
			otherLinks.map(({ text, icon, link }: any) => {
				return (
					<ListItemContent to={link} icon={icon} text={text} />
				)
			})
		}
	</>
)

export const ListContainer: React.FC<Props> = ({handleDrawerClick}): JSX.Element => {
	const navigate = useNavigate();
		
	return (
	    <Box>
			<DrawerHeader handleClick={handleDrawerClick} />
			<Divider />
			<List>
				{renderRouteLinks(links, navigate)}
			</List>
			<Divider />
			<List>
              {renderOtherLinks(otherLinks)}
			</List>
			<Typography component="div" style={{ margin: '50px 0px' }}>
				<span style={{ marginLeft: "20px" }}>Select your shop</span>
				<SelectItems />
			</Typography>
		</Box>
		);
};

