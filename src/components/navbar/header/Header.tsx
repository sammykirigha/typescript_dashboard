import React from 'react';
import './Header.css'
import { useLocation } from 'react-router-dom';
import { Badge } from '@mui/material';
import { HiOutlineLightningBolt } from 'react-icons/hi';

const iconStyles = {
    height: '23px',
	width: '23px',
	color: '#103B66'
}

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
			  <HiOutlineLightningBolt style={iconStyles} />
			  <Badge badgeContent={2} color='error'>
				  <span className="link">{ linkText}</span>
			  </Badge>
		  </div>
	</div>
  )
}
