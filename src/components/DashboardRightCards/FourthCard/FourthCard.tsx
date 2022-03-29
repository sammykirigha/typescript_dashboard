import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import image1 from '../../../images/mine.jpeg'
import './FourthCard.css'

const box = {
display: "flex",
alignItems: "center",
}

const icon = {
height: "30px",
width: "30px",
marginRight: "10px",
color: '#103B66'
}

export const FourthCard:React.FC = ():JSX.Element => {
  return (
	<Card className="fourth-card-box">
            <Box style={box}>
                <HeadphonesOutlinedIcon style={icon}/>
                <Typography component="p" style={{fontWeight: '600'}} className="config-text">
                    Customer support
                </Typography>
            </Box>
            <Box className="customer-box">
                <Avatar alt="Sammy" src={image1} />
                <Typography component="span" className="customerText">
                    Simone is here to help you. Feel free to ask!!!
                </Typography>
            </Box>
            <div className="div">
                <button className="customer-button">Contact us</button>
            </div>
        </Card>
  )
}
