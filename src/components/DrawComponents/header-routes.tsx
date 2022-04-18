import LogoutIcon from "@mui/icons-material/Logout";
import { FiHome, FiShoppingCart, FiUser, FiCreditCard, FiEye } from 'react-icons/fi';
import { AiOutlineUnorderedList, } from 'react-icons/ai';
import { MdOutlineLocalShipping, } from 'react-icons/md';
import { BsCurrencyDollar, BsBrush, BsBullseye, BsGear, BsShare, BsQuestionCircle} from 'react-icons/bs';
import { CgExtensionAdd } from 'react-icons/cg';


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

const iconStyles = {
    height: '20px',
    width: '20px',
}

const dashStyles = {
    height: '20px',
    width: '20px',
}

 export const links: RouteLinks[] = [
    {
        icon: <FiHome style={dashStyles} />,
        text: "Dashboard",
        link:"/"
    },
    {
        icon: <FiShoppingCart style={iconStyles}/>,
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
            
        ]
    },
    {
        icon: <AiOutlineUnorderedList style={iconStyles} />,
        text: "Orders",
        badge: 14,
        link:"/admin/orders"
    },
    {
        icon: <FiUser style={iconStyles} />,
        text: "Customers",
        link: "/admin/customers"
    },
    {
        icon: <BsBullseye style={iconStyles} />,
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
                text:"Post-purchase ",
                link: "/admin/marketing/conversion" 
            },
            {
                text:"Cart abandonment",
                link: "/admin/marketing/abandonment"
            },
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
        ]
    },
    {
        icon: <MdOutlineLocalShipping style={iconStyles} />,
        text: "Delivery Options",
        link: "/admin/delivery"
    },
    {
        icon: <BsCurrencyDollar style={iconStyles} />,
        text: "Payment Options",
        link: "/admin/payment"
    },
    {
        icon: <BsBrush style={iconStyles}/>,
        text: "Store Design",
        link: "/admin/store"
    },
    {
        icon: <FiCreditCard style={iconStyles}  />,
        text: "Subscribtions",
        link: "/admin/subscriptions"
    },
    {
        icon: <BsGear style={iconStyles} />,
        text: "Integrations",
        link: "/admin/integrations"
    },
    {
        icon: <CgExtensionAdd style={iconStyles} />,
        text: "Extensions",
        link: "/admin/extensions"
    },
    {
        icon: <BsGear style={iconStyles}  />,
        text: "Settings",
        link: "/admin/settings"
    },
    {
        icon: <LogoutIcon style={iconStyles} />,
        text: "Log out",
        link: "/admin/logout"
    },
];

export const otherLinks: OtherLinks[] = [
    {
        icon: <BsQuestionCircle style={iconStyles} />,
        text: "Customer Support",
        link:"/admin/support"
    },
    {
        icon: <BsShare style={iconStyles} />,
        text: "Share your shop",
        link:"/admin/share"
    },
    {
        icon: <FiEye style={iconStyles} />,
        text: "view your shop",
        link:"/admin/shops"
    },
]
