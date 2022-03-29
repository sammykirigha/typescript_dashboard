import React from 'react';
import './Header.css'
import { useLocation } from 'react-router-dom';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import { Badge } from '@mui/material';

interface Props {
	title: string;
	linkText: string
}

export const Header: React.FC<Props> = ({ title, linkText }): JSX.Element => {
	const location = useLocation()
	const name = location.pathname.split('/')
  return (
	  <div className='header'>
		  <span className="title">{name[2] ? name[2] : title}</span>
		  <div className="header-left">
			  <BoltOutlinedIcon />
			  <Badge badgeContent={2} color='error'>
				  <span className="link">{ linkText}</span>
			  </Badge>
		  </div>
	</div>
  )
}
