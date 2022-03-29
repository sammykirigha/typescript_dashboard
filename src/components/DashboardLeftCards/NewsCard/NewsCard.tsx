import { Card } from '@mui/material';
import './NewsCard.css'
import React from 'react';

const cardStyle = {
	padding: '10px',
    maxHeight: '220px',
    width: '100%'
}

interface Props {
	children: React.ReactElement | React.ReactElement[]
}

export const NewsCard: React.FC<Props> = ({children}): JSX.Element => {
  return (
	  <Card style={cardStyle}>
		  {children}
	</Card>
  )
}
