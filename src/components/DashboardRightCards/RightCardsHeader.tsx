import { Box, Typography } from '@mui/material';
import './RightCardsHeader.css'
import React from 'react';

interface Props {
	icon: JSX.Element;
	headerText: string
}

export const RightCardsHeader:React.FC<Props> = ({icon, headerText}): JSX.Element => {
  return (
	<Box className="box">
		{icon}
		<Typography className="config-text">{ headerText}</Typography>
    </Box>
  )
}
