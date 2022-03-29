import { Card, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import image1 from "../../../images/Phone.png";
import image2 from "../../../images/appstore.png";
import image3 from "../../../images/googleapp.png";
import { Box } from "@mui/system";
import React from "react";
import './AdvertCard.css'

export const AdvertCard: React.FC = (): JSX.Element => {
    return (
        <Card className="add-card">
            <Box className="add-box">
                <Box className="add-body">
                    <Box className="add-text-box">
                        <Typography className="add-paragraph">
                            Sell your products on your exclusive APP published
                            on the stores
                        </Typography>
                        <Typography className="add-link-box">
                            <span className="add-link">Show more</span>
                            <ArrowForwardIcon className="arrowForward" />
                        </Typography>
                    </Box>
                    <Box className="add-image-div">
                        <img className="phone-image" src={image1} alt="phone" />
                    </Box>
                </Box>
                <Box className="images">
                  <img className="playStore" src={image2} alt="phone" />
                  <img className="playStore" src={image3} alt="phone" />
                </Box>
            </Box>
        </Card>
    );
};
