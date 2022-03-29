import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BrushIcon from "@mui/icons-material/Brush";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VerifiedIcon from "@mui/icons-material/Verified";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ShareIcon from "@mui/icons-material/Share";
import PreviewIcon from "@mui/icons-material/Preview";
import QuizIcon from "@mui/icons-material/Quiz";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";

type RouteLinks =  {
	icon: JSX.Element;
	text: string;
	link: string;
	badge?: number;
	children?: {
		text: string;
		link: string;
	}[]
}

interface OtherLinks {
	icon: JSX.Element;
	text: string;
	link: string;
}

 export const links: RouteLinks[] = [
    {
        icon: <HomeIcon />,
        text: "Dashboard",
        link:"/"
    },
    {
        icon: <ShoppingCartOutlinedIcon />,
        text: "Catalogue",
        link: "/admin/catalogue",
        children: [
            {
                text: "Discount codes",
                link: "/admin/marketing/discount" 
            },
            {
                text:"Exit intent",
                link: "/admin/marketing/intent" 
            },
            {
                text:"Checkout Features",
                link: "/admin/marketing/features" 
            },
            {
                text:"Post-purchase conversion",
                link: "/admin/marketing/conversion" 
            },
            {
                text:"Cart abandonment",
                link: "/admin/marketing/abandonment"
            },
            {
                text:"Timer checkout",
                link: "/admin/marketing/checkout"
            },
            { 
                text:"Sell on Social",
                link: "/admin/marketing/social" 
            }
        ]
    },
    {
        icon: <FormatListBulletedIcon />,
        text: "Orders",
        badge: 12,
        link:"/admin/orders"
    },
    {
        icon: <PersonIcon />,
        text: "Customers",
        link: "/admin/customers"
    },
    {
        icon: <WifiTetheringIcon />,
        text: "Marketing",
        link:"/admin/marketing",
        children:[
            {
                text: "Discount codes",
                link: "/admin/marketing/discount" 
            },
            {
                text:"Exit intent",
                link: "/admin/marketing/intent" 
            },
            {
                text:"Checkout Features",
                link: "/admin/marketing/features" 
            },
            {
                text:"Post-purchase conversion",
                link: "/admin/marketing/conversion" 
            },
            {
                text:"Cart abandonment",
                link: "/admin/marketing/abandonment"
            },
            {
                text:"Timer checkout",
                link: "/admin/marketing/checkout"
            },
            { 
                text:"Sell on Social",
                link: "/admin/marketing/social" 
            },
            {
                text:"Special Offer",
                link: "/admin/marketing/specialOffer"
            },
            {
                text:"Seasonal Offer",
                link: "/admin/marketing/seasonalOffers" 
           },
        ]
    },
    {
        icon: <LocalShippingIcon />,
        text: "Delivery Options",
        link: "/admin/delivery"
    },
    {
        icon: <AttachMoneyIcon />,
        text: "Payment Options",
        link: "/admin/payment"
    },
    {
        icon: <BrushIcon />,
        text: "Store Design",
        link: "/admin/store"
    },
    {
        icon: <SubscriptionsIcon />,
        text: "Subscribtions",
        link: "/admin/subscriptions"
    },
    {
        icon: <VerifiedIcon />,
        text: "Integrations",
        link: "/admin/integrations"
    },
    {
        icon: <GridViewIcon />,
        text: "Extensions",
        link: "/admin/extensions"
    },
    {
        icon: <SettingsIcon />,
        text: "Settings",
        link: "/admin/settings"
    },
    {
        icon: <LogoutIcon />,
        text: "Log out",
        link: "/admin/logout"
    },
];

export const otherLinks: OtherLinks[] = [
    {
        icon: <QuizIcon />,
        text: "Customer Support",
        link:"/admin/support"
    },
    {
        icon: <ShareIcon />,
        text: "Share your shop",
        link:"/admin/share"
    },
    {
        icon: <PreviewIcon />,
        text: "view your shop",
        link:"/admin/shops"
    },
]
