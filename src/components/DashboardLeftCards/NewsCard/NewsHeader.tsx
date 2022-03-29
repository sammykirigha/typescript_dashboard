import { Box, Typography } from '@mui/material';
import './NewsCard.css'
import React from 'react';
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";


export const NewsHeader:React.FC = ():JSX.Element => {
  return (
	<Box className="news-box">
            <Box className="news-main">
                <FeedOutlinedIcon className="news-icon" />
                <Typography component="p" className="news-text1">
                    Latest news
                </Typography>
            </Box>
            <Box className="news-main">
                <Typography component="p" className="news-text2">
                    Visit our blog
                </Typography>
                <OpenInNewOutlinedIcon
                    style={{
                        marginLeft: "10px",
                        color: "#21B8F9",
                    }}
                />
            </Box>
        </Box>
  )
}
