import { Box, CssBaseline } from '@mui/material';
import { styled, } from '@mui/material/styles';
import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import {
    Drawer,
    IconButton,
    Slide,
    Toolbar,
    useScrollTrigger,
} from "@mui/material";
import { Header } from '../../components/navbar/header/Header';
import { ListContainer } from '../../components/DrawComponents/list/List';

const drawerWidth = 240;

interface ChildrenProps  { 
    children: React.ReactElement
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
 
const HideOnScroll = ({children}: ChildrenProps) => {
	const trigger = useScrollTrigger()
	return (
		<Slide appear={false} direction={"down"} in={!trigger}>
			{children}
		</Slide>
	)
}

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));
 
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
	backgroundColor: 'white',
    color: 'black',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Main = styled("main", {
	shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(
	({ theme, open }) => ({
		flexGrow: 1,
		transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
	})
)

const drawerStyles = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
};

export const TheDrawer: React.FC<ChildrenProps> = ({children}): JSX.Element => {
	const [open, setOpen] = React.useState(false);
	const handleDrawerOpen = (): void => {
		setOpen(true)
	}

	const handleDrawerClose = (): void => {
		setOpen(false)
	}
  return (
	  <Box style={drawerStyles}>
		  <CssBaseline />
		  <HideOnScroll>
			  <AppBar position='fixed' open={open}>
				  <Toolbar>
					  <IconButton
						  color='inherit'
						  aria-label='open drawer'
						  onClick={handleDrawerOpen}
						  edge="start"
						  sx={{mr:2, ...(open && {display: "none"})}}
					  >
						  <MenuIcon />
					  </IconButton>
					  <Header title={"Dashboard"} linkText={"What's new"} />
				  </Toolbar>
			  </AppBar>
		  </HideOnScroll>
		  <Drawer
			  sx={{
				  width: drawerWidth,
				  flexShrink: 0,
				  "& .MuiDrawer-paper": {
					  width: drawerWidth,
					  boxSizing: "border-box"
				  }
			  }}
			  variant='persistent'
			  anchor='left'
			  open={open}
		  >
			  
            <ListContainer handleDrawerClick={handleDrawerClose} />
		  </Drawer>
		  <Main open={open}>
			  <DrawerHeader />
			  {children}
		  </Main>
	</Box>
  )
}
