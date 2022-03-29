import { Box, Card, Typography } from '@mui/material'
import React from 'react';
import './FirstCard.css'
import { RightCardsHeader } from '../RightCardsHeader';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import { CardBody } from '../../reusableCompts';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const footerStyle = {
    color: '#21b8f9',
	cursor: 'pointer',
	marginTop: '50px',
	display: 'flex',
	alignItems: 'center',
	paddingTop: '20px'
};

const __icon = {
height: "30px",
width: "30px",
marginRight: "10px",
color: '#103B66'
}

export const FirstCard:React.FC = ():JSX.Element => {
  return (
	<Card className="first-card">
			<RightCardsHeader
                icon={<BuildOutlinedIcon style={__icon} />}
				headerText={"Configure your shop"}
            />
            <CardBody>
                <Box className="complete-box">
                    <Typography className="complete-box">45%</Typography>
                    <Typography component="span">completed</Typography>
                </Box>
                <Box className='par-box'>
                    <Typography component="p" className="config-paragraph">
                        Complete all the steps to have a complete shop to best
                        present to your customers.
                    </Typography>
                </Box>
            </CardBody>
            <div style={footerStyle}>
                <span className="config-link">Complete the setup!</span>
                <ArrowForwardIcon className="footer-icon" />
            </div>
        </Card>
  )
}
