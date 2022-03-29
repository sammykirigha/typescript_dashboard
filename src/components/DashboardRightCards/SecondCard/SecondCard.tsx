import { Box, Card, Typography } from '@mui/material'
import React from 'react';
import './SecondCard.css'
import { CardBody } from '../../reusableCompts'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarRateIcon from "@mui/icons-material/StarRate";

const footerStyle = {
    color: "#00C48C",
    cursor: "pointer",
    marginTop: "25px",
    display: "flex",
    alignItems: "center",
};

const configLink = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '17px',
    textDecorationLine: 'underline',
    color: '#00C48C',
    cursor: ' pointer',
    paddingLeft: '12px'
}

const trustIcon = {
    height: '35px',
    width: '35px',
    color: '#00b67a'
}

export const SecondCard:React.FC = ():JSX.Element => {
  return (
	<Card className="second-card">
            <Box className="box-head">
                <StarRateIcon style={trustIcon} />
                <Typography className="link-text">Trustpilot</Typography>
            </Box>
            <CardBody>
                <Typography component="p" className="trust-paragraph">
                    Show us your love by leaving a <strong style={{color: '#00C48C'}}>positive</strong>  review on trust
                    pilot and receive the extension of 50 additional products
                </Typography>
            </CardBody>
            <div style={footerStyle}>
                <span style={configLink}>Write a review on trustpilot</span>
                <ArrowForwardIcon className="footer-icon" />
            </div>
        </Card>
  )
}
